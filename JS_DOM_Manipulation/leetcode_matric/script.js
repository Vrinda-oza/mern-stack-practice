// this is the main js file for the leetcode metrics app
// i am using a free api to get real data from leetcode
// api link: https://alfa-leetcode-api.onrender.com/

var apiUrl = "https://alfa-leetcode-api.onrender.com/";


// -----------------------------------------------
// when user clicks search button this function runs
// -----------------------------------------------

async function fetchStats() {

    // step 1 - get the username from the input box
    var username = document.getElementById("username").value;
    username = username.trim(); // remove extra spaces

    // if user didn't type anything just stop here
    if (username == "") {
        return;
    }

    // step 2 - hide results and error, show loading spinner
    document.getElementById("results").classList.remove("visible");
    document.getElementById("errorBox").classList.remove("visible");
    document.getElementById("loader").classList.add("visible");

    // step 3 - call the api to get data
    // we need two things: profile info and solved problems info
    try {

        var profileResponse = await fetch(apiUrl + username);
        var solvedResponse  = await fetch(apiUrl + username + "/solved");

        // if something went wrong with the request
        if (!profileResponse.ok || !solvedResponse.ok) {
            throw new Error("User not found. Please check the username and try again.");
        }

        // step 4 - convert the response to json so we can use the data
        var profileData = await profileResponse.json();
        var solvedData  = await solvedResponse.json();

        // if the api returned an error message inside the json
        if (profileData.errors || solvedData.errors) {
            throw new Error("User not found. Please check the username and try again.");
        }

        // step 5 - hide the loader
        document.getElementById("loader").classList.remove("visible");

        // step 6 - show profile info
        showProfile(profileData, username);

        // step 7 - show the circles (easy, medium, hard)
        showCircles(solvedData);

        // step 8 - show the submission cards
        showCards(solvedData);

        // step 9 - show the results section
        document.getElementById("results").classList.add("visible");

    } catch (error) {

        // something went wrong - hide loader and show error message
        document.getElementById("loader").classList.remove("visible");

        var errorBox = document.getElementById("errorBox");
        errorBox.textContent = "⚠ " + error.message;
        errorBox.classList.add("visible");
    }

}


// -----------------------------------------------
// show the user profile at the top (name, avatar, rank)
// -----------------------------------------------

function showProfile(profileData, username) {

    // get the name - if no name use username
    var name = profileData.name;
    if (name == "" || name == null) {
        name = profileData.username;
    }
    if (name == "" || name == null) {
        name = username;
    }

    // get the rank - if no rank show a dash
    var rank = "—";
    if (profileData.ranking) {
        rank = profileData.ranking.toLocaleString(); // adds commas like 1,234,567
    }

    // get the avatar image - if no avatar use a generated one
    var avatarImage = profileData.avatar;
    if (avatarImage == "" || avatarImage == null) {
        avatarImage = "https://api.dicebear.com/7.x/identicon/svg?seed=" + username;
    }

    // put everything into the html elements
    document.getElementById("realName").textContent        = name;
    document.getElementById("usernameDisplay").textContent = "@" + (profileData.username || username);
    document.getElementById("rankVal").textContent         = rank;
    document.getElementById("avatar").src                  = avatarImage;

}


// -----------------------------------------------
// show the 3 circles for easy, medium, hard problems
// -----------------------------------------------

function showCircles(solvedData) {

    // get how many problems the user solved in each level
    var easySolved  = solvedData.easySolved   || 0;
    var medSolved   = solvedData.mediumSolved || 0;
    var hardSolved  = solvedData.hardSolved   || 0;

    // get the total number of problems available on leetcode
    var easyTotal  = solvedData.totalEasy   || 800;
    var medTotal   = solvedData.totalMedium || 1700;
    var hardTotal  = solvedData.totalHard   || 700;

    // total solved across all difficulties
    var totalSolved = easySolved + medSolved + hardSolved;

    // put the numbers inside the circles
    document.getElementById("easySolved").textContent  = easySolved;
    document.getElementById("easyTotal").textContent   = "/" + easyTotal;

    document.getElementById("mediumSolved").textContent = medSolved;
    document.getElementById("mediumTotal").textContent  = "/" + medTotal;

    document.getElementById("hardSolved").textContent  = hardSolved;
    document.getElementById("hardTotal").textContent   = "/" + hardTotal;

    // animate the circle rings
    animateCircleRing("easyCircle",   easySolved, easyTotal);
    animateCircleRing("mediumCircle", medSolved,  medTotal);
    animateCircleRing("hardCircle",   hardSolved, hardTotal);

    // animate the colored distribution bar at the bottom of circles
    if (totalSolved > 0) {
        var easyPercent  = (easySolved / totalSolved) * 100;
        var medPercent   = (medSolved  / totalSolved) * 100;
        var hardPercent  = (hardSolved / totalSolved) * 100;

        animateProgressBar("easyBar",   easyPercent);
        animateProgressBar("mediumBar", medPercent);
        animateProgressBar("hardBar",   hardPercent);
    }

}


// -----------------------------------------------
// animate the svg circle ring (the progress arc)
// -----------------------------------------------

function animateCircleRing(circleId, solved, total) {

    var circleElement = document.getElementById(circleId);

    if (!circleElement || total == 0) {
        return; // nothing to do
    }

    // the full circle length is 264 (based on radius 42)
    // we figure out how much of the circle to "hide"
    var fullLength = 264;
    var filledLength = (solved / total) * fullLength;
    var hiddenLength = fullLength - filledLength;

    // wait a tiny bit before animating so the css transition is visible
    setTimeout(function() {
        circleElement.style.strokeDashoffset = hiddenLength;
    }, 100);

}


// -----------------------------------------------
// animate a progress bar to a certain width %
// -----------------------------------------------

function animateProgressBar(barId, percentage) {

    // make sure percentage never goes over 100
    if (percentage > 100) {
        percentage = 100;
    }

    setTimeout(function() {
        document.getElementById(barId).style.width = percentage + "%";
    }, 150);

}


// -----------------------------------------------
// show the 4 submission stat cards
// -----------------------------------------------

function showCards(solvedData) {

    // get solved counts again (needed for fallback)
    var easySolved  = solvedData.easySolved   || 0;
    var medSolved   = solvedData.mediumSolved || 0;
    var hardSolved  = solvedData.hardSolved   || 0;
    var easyTotal   = solvedData.totalEasy    || 800;
    var medTotal    = solvedData.totalMedium  || 1700;
    var hardTotal   = solvedData.totalHard    || 700;
    var totalSolved = easySolved + medSolved + hardSolved;
    var grandTotal  = easyTotal + medTotal + hardTotal;

    // check if the api gave us detailed submission breakdown
    var hasDetailedStats = solvedData.submitStats && solvedData.submitStats.acSubmissionNum;

    if (hasDetailedStats) {

        // the api gave us detailed accepted and total submission counts
        var acceptedList = solvedData.submitStats.acSubmissionNum;
        var allList      = solvedData.submitStats.totalSubmissionNum || [];

        // helper to find count by difficulty name
        function getCount(list, difficultyName) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].difficulty == difficultyName) {
                    return list[i].count;
                }
            }
            return 0;
        }

        // accepted counts
        var easyAccepted   = getCount(acceptedList, "Easy")   || easySolved;
        var medAccepted    = getCount(acceptedList, "Medium") || medSolved;
        var hardAccepted   = getCount(acceptedList, "Hard")   || hardSolved;
        var totalAccepted  = getCount(acceptedList, "All")    || (easyAccepted + medAccepted + hardAccepted);

        // total submission counts
        var easyAllSubs    = getCount(allList, "Easy")   || easyAccepted;
        var medAllSubs     = getCount(allList, "Medium") || medAccepted;
        var hardAllSubs    = getCount(allList, "Hard")   || hardAccepted;
        var totalAllSubs   = getCount(allList, "All")    || (easyAllSubs + medAllSubs + hardAllSubs);

        // fill in the overall card
        document.getElementById("totalSubmissions").textContent = totalAllSubs.toLocaleString();
        document.getElementById("totalAC").textContent          = totalAccepted.toLocaleString() + " accepted";
        animateProgressBar("totalBar", totalAllSubs > 0 ? (totalAccepted / totalAllSubs) * 100 : 0);

        // fill in the easy card
        document.getElementById("easySubmissions").textContent = easyAllSubs.toLocaleString();
        document.getElementById("easyAC").textContent          = easyAccepted.toLocaleString() + " accepted";
        animateProgressBar("easySubBar", easyAllSubs > 0 ? (easyAccepted / easyAllSubs) * 100 : 0);

        // fill in the medium card
        document.getElementById("mediumSubmissions").textContent = medAllSubs.toLocaleString();
        document.getElementById("mediumAC").textContent          = medAccepted.toLocaleString() + " accepted";
        animateProgressBar("mediumSubBar", medAllSubs > 0 ? (medAccepted / medAllSubs) * 100 : 0);

        // fill in the hard card
        document.getElementById("hardSubmissions").textContent = hardAllSubs.toLocaleString();
        document.getElementById("hardAC").textContent          = hardAccepted.toLocaleString() + " accepted";
        animateProgressBar("hardSubBar", hardAllSubs > 0 ? (hardAccepted / hardAllSubs) * 100 : 0);

    } else {

        // no detailed stats from api, just use the solved numbers as fallback

        document.getElementById("totalSubmissions").textContent = totalSolved.toLocaleString();
        document.getElementById("totalAC").textContent          = totalSolved.toLocaleString() + " accepted";
        animateProgressBar("totalBar", grandTotal > 0 ? (totalSolved / grandTotal) * 100 : 0);

        document.getElementById("easySubmissions").textContent = easySolved.toLocaleString();
        document.getElementById("easyAC").textContent          = easySolved.toLocaleString() + " accepted";
        animateProgressBar("easySubBar", easyTotal > 0 ? (easySolved / easyTotal) * 100 : 0);

        document.getElementById("mediumSubmissions").textContent = medSolved.toLocaleString();
        document.getElementById("mediumAC").textContent          = medSolved.toLocaleString() + " accepted";
        animateProgressBar("mediumSubBar", medTotal > 0 ? (medSolved / medTotal) * 100 : 0);

        document.getElementById("hardSubmissions").textContent = hardSolved.toLocaleString();
        document.getElementById("hardAC").textContent          = hardSolved.toLocaleString() + " accepted";
        animateProgressBar("hardSubBar", hardTotal > 0 ? (hardSolved / hardTotal) * 100 : 0);

    }

}


// -----------------------------------------------
// listen for Enter key press in the search box
// -----------------------------------------------

document.getElementById("username").addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        fetchStats();
    }
});