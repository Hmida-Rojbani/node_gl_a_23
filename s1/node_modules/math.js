function sum(array){
    let sum = 0;
    array.forEach(element => {
        sum+=element;
    });
    return sum;
}

function mult(array){
    let sum = 1;
    array.forEach(element => {
        mult+=element;
    });
    return mult;
}

module.exports.sum = sum;
module.exports.mult = mult;