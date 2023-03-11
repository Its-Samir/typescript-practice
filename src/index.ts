// numbers has limit we can see the limit by using Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER)
let num: number = 20;

// BigInt can be used incase of Large Numbers, we cannot use decimal in Bigint, we cannot use Math object on Bigint, we can define bigint in two ways
let bigInt = BigInt(20)
let bigInt2 = 123457890n


// string method
const str: string = 'The Ghosty';
console.log(str.split(' '))


// object
type Caterer = {
    name: string;
    address: string;
    phone: number;
}

// practice
type AirPlane = {
    model: string;
    flightNum: string;
    timeOfDeparture: Date;
    timeOfArrival: Date;
    caterer: Caterer;
}

const airplane: AirPlane = {
    model: 'airplane',
    flightNum: '234r2q',
    timeOfArrival: new Date(),
    timeOfDeparture: new Date(),
    caterer: {
        name: 'name 1',
        address: 'some address',
        phone: 123457998
    }
}

//array 
let arr: (string | number)[] = [1, 5, 'a', 'b']
let arr2: Array<string | number> = [1, 5, 'a', 'b']

// tuples (tuples and array are not same)
let person: [string, string, number?];
person = ['firstName', 'lastName']

if (person) {
    Math.random() * 2
}

// readonly (we cannot edit it)
let numArr: readonly number[] = [1, 2, 3, 4];
//we cannot even use push method since it is now readonly
// numArr.push(78)

//enum (it's index also starts from 0)
export enum Roles {
    admin = 'admin',
    author = 'author',
}

console.log(Roles.author);

// practice
enum LibType {
    national = 'national',
    academic = 'academic',
    public = 'public',
}

type Book = {
    title: string;
    pages: number;
    isbn: string;
}

type Member = {
    name: string;
    phone: string;
    [key: string]: string; // this is index signature (means here we can add any properties further which will be type of string)
}

type Liabrary = {
    name: string;
    address: string;
    numberOfBooks: number;
    type: LibType;
    books: Book[];
    genres: string[];
    members: Member[];
}

const liabrary: Liabrary = {
    name: 'liabrary',
    address: 'some address',
    numberOfBooks: 2455,
    type: LibType.academic,
    books: [
        {title: 'title 1', pages: 189, isbn: 'string'}
    ],
    genres: ['string 1', 'string 2'],
    members: [{name: 'member one', phone: '12374759'}, {name: 'member two', email: 'memberone@test.com', phone: '1234234234'}]
}