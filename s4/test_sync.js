function hardTraitment() {
  let sum = 0;
  for (let index = 0; index < 10000000000; index++) {
    sum++;
  }
  return sum;
}

console.log("Begin ");
let sum = hardTraitment();
console.log("sum =", sum);
console.log("End");
