//closures is a combination of function and require data
function outerFunction() {
    
  let name = "vrinda";
  function innerFunction() {
    console.log(name);
}
return innerFunction;

}

let inner=outerFunction(); //in the inner we are store the refrence of the innerfunction
inner();//here also these line called the inderectly outerfunction