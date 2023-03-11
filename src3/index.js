"use strict";
// generics
//example of javscript filter function
// this is example of without type safety
function filterItems(array, predicate) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
const numArr = [2, 5, 8, 6, 3, 1, 9, 5];
const strArr = ['dog', 'cat', 'lion', 'tiger', 'lion', 'dog'];
console.log(filterItems(numArr, (item) => {
    return item > 3;
}));
console.log(filterItems(strArr, (item) => {
    return item === 'lion';
}));
//this example of with type safety
const filterItems2 = (array, predicate) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};
console.log(filterItems2(numArr, (item) => {
    return item > 3; // if we do not return any boolean here ts will throw error
}));
console.log(filterItems2(strArr, (item) => {
    return item === 'lion'; // if we do not return any boolean here ts will throw error
}));
//now for this kind of type (Filter2<T>) declaration we have to explicitly assign type that we want to return like (Filter2<string> or Filter2<number> or Filter2<string | number>)
const filterItems3 = (array, predicate) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};
console.log(filterItems3(strArr, (item) => {
    return item === 'tiger';
}));
console.log(filterItems3(numArr, (item) => {
    return item > 3;
}));
const mapItems = (array, func) => {
    let result = [];
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            result[i] = func(array[i]);
        }
    }
    return result;
};
console.log(mapItems(numArr, (item) => {
    return { name: item };
}));
