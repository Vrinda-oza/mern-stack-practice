/* function changetext() {
    let fpara=document.getElementById('fpara');
    fpara.textContent="vrinda";
}

let fpara=document.getElementById('fpara');
fpara.addEventListener('click',changetext);

//fpara.removeEventListener('click',changetext);

 */
/*     event object
function changetext(event) {
    console.log(event)
    let fpara=document.getElementById('fpara');
    fpara.textContent="vrinda";
}

let fpara=document.getElementById('fpara');
fpara.addEventListener('click',changetext);
 */


/*      default event*/

/* let anchorElement=document.getElementById('fanchor');

anchorElement.addEventListener('click',function(event){
    event.preventDefault();
    anchorElement.textContent="click done"
});
 */



/*         Browser Events (event,respond,data store,stop,lifecycle)

 event is one kind of announcement by browser like click on the keyboard ,scrolling using mouseetc..
event is attach with action if we want to see the event list in the browser so we use monitorEvents(document);
and if we want to stop the monitor so we are using unmonitorEvents(document) */

/*          Event Target
event target is kind of entity where is event recive on particular elements location
event -->click
playbtn-->event target
video play-->action/behavior
action list down that place called event listener
elements add using add evenet Listener()
elements remove using remove elements listener()

*/
// let paras=document.querySelectorAll('p');
 function alertpara(event)
        {
            if(event.target.nodeName==='SPAN'){
                 alert("you have clicked on:" + event.target.textContent);

            }
           
        }
//     for(let i=0;i<paras.length;i++)
//     {
//         let para=paras[i];
//         para.addEventListener('click',alertpara)
//     }

let mydiv=document.getElementById('wrapper');

document.addEventListener('click',alertpara)


