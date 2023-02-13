function softTraitment() {
    return new Promise((reslove,reject)=>{
        let sum = 0;
  
    console.log("Connect to Calcul API");
    setTimeout(() => {
      console.log("retreive from Calcul API");
      sum = 100000000000000;
      reslove(sum)
    }, 2000);
  });
    }

  async function exec(){
    try {
      let sum = await softTraitment();
      let res = await By5(sum);
      display(res);
    } catch (error) {
      console.error('Error : ',error);
    }
      
      
    }
  
  console.log("Begin ");
//  softTraitment().then(sum => By5(sum))
//                 .then(res => display2(res))
//                 .catch(err => console.error('Error :',err))
   exec(); 
  console.log("End");
  
  function display(sum) {
    console.log("sum =", sum);
 }

function display2(sum) {
    console.log("Sum =", sum);
 }

 function By5(sum) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Inside By5');

        if(sum >100000)
        reject('Value is too big')
        sum *=5;
        resolve(sum)
      }, 2000);
      
    })
    
 }