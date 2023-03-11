"use strict";
/// functions
function first(name, age) {
    return `${name} ${age}`;
}
// function with some optional parameter
const second = (name, age) => {
    if (age) {
        return `${name} ${age}`;
    }
    return `${name}`;
};
console.log(second('ghosty'));
const secondWithTypeAlias = (param) => {
    if (param.age) {
        return `${param.name} ${param.age}`;
    }
    return `${param.name}`;
};
console.log(secondWithTypeAlias({ name: 'ghosty' }));
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["years"] = "years";
    AgeUnit["months"] = "months";
})(AgeUnit || (AgeUnit = {}));
const person = {
    name: 'A',
    age: 20,
    ageUnit: AgeUnit.years,
    greet: (greeting) => {
        return `${greeting} ${person.name}`;
    },
};
function thirdFunction(person) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.months;
    return person;
}
console.log(thirdFunction(person));
console.log(person.greet('Hello'));
const reserve = (departureDate, returnDate, departingFrom, destination) => {
    //checking if someone is applying for return ticket or not
    if (returnDate instanceof Date && destination) {
        return {
            departureDate: departureDate,
            returnDate: returnDate,
            departingFrom: departingFrom,
            destination: destination
        };
    }
    if (typeof returnDate === 'string') {
        return {
            departureDate: departureDate,
            departingFrom: returnDate,
            destination: departingFrom
        };
    }
    throw new Error('Please provide valid details');
};
console.log(reserve(new Date(), new Date(), 'a', 'b'));
console.log(reserve(new Date(), 'a', 'b'));
