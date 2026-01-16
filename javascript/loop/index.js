/* for(let i=1;i<=5;i++)
{
    console.log(i,'hello');
}
 */

/* for(let i=1;i<=5;i++){

    if(i==4)
    //    break;
        continue;
    else{

    
       console.log(i);
    }
} */

    /* let i=1;
    while(i<=5)
    {
        console.log(i);
        i++;
    } */

/* let i=1;
 do{
    
    console.log(i);
    i++;
}while(i<=5); */



//string

/* let string1="hello";
console.log(string1);
 */

/* let firstname="vrinda";
let lastname='oza';
console.log(typeof(lastname));
 */

//if we want to space in string or next line word so we are use
//``this symbol

/* let name=`oza
vrinda
this
is
my
name`;
console.log(name); */

// let name=new String("henehenehne");
// console.log(name);

//operation of string

/* 
let op1="heelo ";
let op2="vrindaaa ";

let op3=op1  +  op2;
console.log(op3); */


/* let op1="heelo ";
let op2="vrindaaa "
let final=`${op1} ${op2}`;
console.log(final); */


/* let op1="heelo ";
let op2="VRINDA "
console.log(op1.length);
console.log(op1.toUpperCase());
console.log(op2.toLocaleLowerCase());
 */

/* let name1="ozavrindaaa";
console.log(name1.substring(2));
console.log(name1.substring(1,4));//ending index value are exclusive it's not included
 */

//let sentence="hello \\to   \"kaise\" \\ho \\aap \\sab";
let sentence="hello \\to \\kaise \\ho \\aap \\sab";

let word=sentence.split('\\');
console.log(word);

console.log(word.join('-'));