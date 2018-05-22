const trampoline = fun => (...args) => {
    let res = fun(...args);
    while (typeof res === 'function') {
        res = res();
    }

    return res;
};


const spiralMatrixTraversalRecursive = (matrix, result = []) => {
    if (!Array.isArray(matrix) || !matrix.length > 0){
        return result;
    }

    // grab first row values
    const first = matrix.shift();
    result = result.concat(first);

    // grab values on right side of middle rows
    for (i = 0; i<matrix.length - 1; i++) {
        result.push(matrix[i].pop());
    }   

    // grab last row and reverse the order
    const last = matrix.pop();
    if(last && Array.isArray(last) && last.length > 0) {
        result = result.concat(last.reverse());
    }

    // grab items from left side of middle rows
    for (j = matrix.length-1; j> -1; j--) {
        result.push(matrix[j].shift());
    }
    
    // return function if there are remaining items to process, else return final result
    return ( matrix.length > 0) 
        ? () => spiralMatrixTraversalRecursive(matrix, result) 
        : result;
};



// create trampolinified spiralMatrixTraversalRecursive function
const spiral = trampoline(spiralMatrixTraversalRecursive);


// now run some tests
const arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

const arr2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const arr3 = [
    [1,2],
    [3,4]
];

const arr4 = [[1]];

const arr5 = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];


const test1 = spiral(arr);
console.log('test spiralMatrixTraversal: ', test1, arr);

const test2 = spiral(arr2);
console.log('test spiralMatrixTraversal2: ', test2, arr2);

const test3 = spiral(arr3);
console.log('test spiral 3: ', test3, arr3);

const test4 = spiral(arr4);
console.log('test spiral 4: ', test4, arr4);

const test5 = spiral(arr5);
console.log('test spiral 5: ', test5, arr5);




