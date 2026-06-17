// //performance checking
// reflow and repaint


// //code1
// const t1=performance.now()
// for(let i=1;i<=100;i++){

//     let para=document.createElement('p');
//     para.textContent="This is Para"+i;
//     document.body.appendChild(para);
// }
// const t2=performance.now()

// console.log('total time by code 1:'+(t2-t1));


// //code2
// const t3=performance.now()

// let mydiv=document.createElement('div');

// for(let i=1;i<=100;i++){

//     let para=document.createElement('p');
//     para.textContent="This is Para"+i;
//     mydiv.appendChild(para);
// }

// document.body.appendChild(mydiv);
// const t4=performance.now()

// console.log('total time by code 2:'+(t3-t4));



//best code

let fragment=document.createDocumentFragment();

for(let i=1;i<=100;i++)
{
    let para=document.createElement('p');
    para.textContent="this is para"+i+1;
    //No reflow and no repaint for the below line
    fragment.appendChild(para);

}
//the below line takes  reflow and  repaint
document.body.appendChild(fragment);