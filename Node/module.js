let counter = (arr) => {
    return `There are ${arr.length} elements in the array.`;
}

let arrayAdder = (arr) => {
    let result = 0
    arr.forEach(number => {
        result += number;
    });
    return result
    
}

let pi = 3.142;

module.exports = {
    mycounter: counter,
    arrayAdder,
    pi

}


//Note that module.exports is an empty array. So what we did above is, to set key value pairs. The keys can be any variable, but the value must be equal to what you are exporting. Also, in the file which you exported into, make sure that you use the property name which you assigned. 