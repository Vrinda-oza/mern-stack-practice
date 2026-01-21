
//default parameters

/* //pass function as a parameter

function getAge(){
    return 190;
}

function utility(name="vriza",age=getAge()){
    console.log(name," ",age);
}
utility("vrinda",20);
utility();
 */



/* function solve(value="vrinda"){
    console.log("hello:",value);

}
solve(null);

solve(undefined);
 */






/* //array also posible to pass as a parameter 
function solve(value=["vrinda","oza",10,20]){
    console.log("hello",value);

}
solve("vrinda");
solve();
 */




/* //default parameter as a object
function solve(value={age:20,wt:70,ht:180}){
    console.log("hello",value);

}
//solve("vrinda");
solve();
 */



//multiple value parameter as a default
/* function sayname(fname="vriza",lname="Oza"){
    console.log("My Name Is:",fname," ",lname);
}
sayname("vrinda");
 */

/* //parameter dependent
function sayname(fname="vriza",lname=fname.toLocaleUpperCase()){
    console.log("My Name Is:",fname," ",lname);
}
//sayname("vrinda");
sayname();
 */


//classes


/* class human{
    //property
    age;//public default

    #wt=70;//private #is the symbol of the private var,function
    ht=180;

    constructor(newAge,newHt,newWt){
        this.age=newAge;
        this.#wt=newWt;
        this.ht=newHt;

    }

    //behaviour
    walking(){
        console.log("I am walking",  this.#wt);
    }

    runing(){
        console.log("I am runing");
    }

    get fetchweight(){
        return this.#wt;
    }
    set modifyweight(value){
        this.#wt=value;

    }
    
}
let  obj=new human(50,185,71);
console.log(obj.age);  
console.log(obj.fetchweight);
console.log(obj.wt=10);//setter used here
//console.log(obj.#wt);//it's show error because private  variable not accessible outside the class
obj.walking();
obj.runing();

 */