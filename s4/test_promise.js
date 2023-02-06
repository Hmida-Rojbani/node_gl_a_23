function softTraitment() {
    return new Promise((reslove,reject)=>{
        let sum = 0;
  
    console.log("Connect to Calcul API");
    setTimeout(() => {
      console.log("retreive from Calcul API");
      sum = 100000000000;
      reslove(sum)
    }, 2000);
  });
    }
    
  
  console.log("Begin ");
 softTraitment().then(sum => By5(sum))
                .then(res => display2(res));
  
  console.log("End");
  
  function display(sum) {
    console.log("sum =", sum);
 }

function display2(sum) {
    console.log("Sum =", sum);
 }

 function By5(sum) {
    return new Promise((resolve, reject) => {
        sum *=5;
        resolve(sum)
    })
    
 }