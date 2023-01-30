const fs =require('fs');

console.log('Begin Read');
const buffer = fs.readFileSync('file.txt');
console.log('buffer :',buffer);
console.log('End Read');
console.log('Something Else');