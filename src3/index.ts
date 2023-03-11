// generics
//example of javscript filter function

// this is example of without type safety
function filterItems(array: any[], predicate: Function) {
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

console.log(filterItems(numArr, (item: number) => {
    return item > 3
}))

console.log(filterItems(strArr, (item: string) => {
    return item === 'lion';
}))

// -------------------------------------------------------------------------------------------------------------------

// the call signature with generics
type Filter = {
    // now this means in every places where we have defined T, if array parameter is full of number then the item which are in the predicate function's parameter will also be number (except the return type as we set it to boolean) and the function on which this Filter type will be assigned will return array of number as well. (basically they all need to be same type where we defined type T)
    <T>(array: T[], predicate: (item: T) => boolean): T[];
}

//this example of with type safety
const filterItems2: Filter = (array, predicate) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(filterItems2(numArr, (item) => {
    return item > 3; // if we do not return any boolean here ts will throw error
}))

console.log(filterItems2(strArr, (item) => {
    return item === 'lion'; // if we do not return any boolean here ts will throw error
}))

// -------------------------------------------------------------------------------------------------------------

// sometimes we can use generics like this but this breaks the flexiblity to use/utilize generics properly
type Filter2<T> = (array: T[], func: (item: T) => T) => T[] //by the way this is the sort hand syntax to declare call signature

//now for this kind of type (Filter2<T>) declaration we have to explicitly assign type that we want to return like (Filter2<string> or Filter2<number> or Filter2<string | number>)
const filterItems3: Filter2<string | number | boolean> = (array, predicate) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(filterItems3(strArr, (item) => {
    return item === 'tiger';
}))

console.log(filterItems3(numArr, (item) => {
    return item > 3;
}))

// ---------------------------------------------------------------------------------------------------------------------

//example of javscript map function

type MapType = <T, U>(array: T[], func: (item: T) => U) => U[] // this U means that the final return type will be an array of U (basically the final return type will be any type of array (string, number, object) it dose not need to match the T type), see the mapItems function in the last console.log which returns array of Objects (that generics U type (<T, U>) helped us to do)

const mapItems: MapType = (array, func) => {
    let result = [];
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            result[i] = func(array[i]);
        }
    }
    return result;
}

console.log(mapItems(numArr, (item) => {
    return {name: item}
}))