
module.exports=function sum(array){
    let sum = 0;
    array.forEach(element => {
        sum+=element;
    });
    return sum;
}