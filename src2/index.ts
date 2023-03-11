/// functions
function first(name: string, age: number): string {
    return `${name} ${age}`
}

// function with some optional parameter
const second = (name: string, age?: number) => {
    if (age) {
        return `${name} ${age}`
    }
    return `${name}`
}
console.log(second('ghosty'))

// function with custom Types
type Detail = {
    name: string;
    age?: number;
}

const secondWithTypeAlias = (param: Detail) => {
    if (param.age) {
        return `${param.name} ${param.age}`
    }
    return `${param.name}`
}

console.log(secondWithTypeAlias({ name: 'ghosty' }))

// Function call signature
type Person = {
    name: string,
    age: number,
    ageUnit: AgeUnit,
    greet: (greeting: string) => string
}

enum AgeUnit {
    years = 'years',
    months = 'months',
}

const person: Person = {
    name: 'A',
    age: 20,
    ageUnit: AgeUnit.years,
    greet: (greeting) => {
        return `${greeting} ${person.name}`
    },
}

function thirdFunction(person: Person): Person {
    person.age = person.age * 12
    person.ageUnit = AgeUnit.months
    return person;
}
console.log(thirdFunction(person))
console.log(person.greet('Hello'));

// function overloading (with a example of flight return ticket and without return ticket)
type Reservation = {
    departureDate: Date;
    returnDate?: Date; // this is for without return ticket (that's why optional)
    departingFrom: string;
    destination: string;
}

type Reserve = {
    // now through this call signature we can use Reserve which may contain returnDate or may not contain returnDate
    (departureDate: Date, returnDate: Date, departingFrom: string, destination: string): Reservation | never;
    (departureDate: Date, departingFrom: string, destination: string): Reservation | never;
}

const reserve: Reserve = (departureDate, returnDate, departingFrom, destination?: string) => {
    //checking if someone is applying for return ticket or not
    if (returnDate instanceof Date && destination) {
        return {
            departureDate: departureDate,
            returnDate: returnDate,
            departingFrom: departingFrom,
            destination: destination
        }
    } 
    if (typeof returnDate === 'string') {
        return {
            // here the objects keys and values matter as we have optional parameter
            departureDate: departureDate,
            departingFrom: returnDate,
            destination: departingFrom
        }
    }
    throw new Error('Please provide valid details');
    
}

console.log(reserve(new Date(), new Date(), 'a', 'b'))
console.log(reserve(new Date(), 'a', 'b'))