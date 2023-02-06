function softTraitment(callback) {
    let sum = 0;
  
    console.log("Connect to Calcul API");
    setTimeout(() => {
      console.log("retreive from Calcul API");
      sum = 100000000000;
      callback(sum)
    }, 2000);
  }
  
  console.log("Begin ");
 softTraitment( (sum) =>{
    By5(sum, s2 => {
        display2(s2)
    })
 });
  
  console.log("End");
  
  function display(sum) {
    console.log("sum =", sum);
 }

function display2(sum) {
    console.log("Sum =", sum);
 }

 function By5(sum, callback) {
    sum *=5;
    callback(sum)
 }