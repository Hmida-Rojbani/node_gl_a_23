function softTraitment() {
  let sum = 0;

  console.log("Connect to Calcul API");
  setTimeout(() => {
    console.log("retreive from Calcul API");
    sum = 100000000000;
    return sum;
  }, 2000);
}

console.log("Begin ");
let sum = softTraitment();
console.log("sum =", sum);
console.log("End");
