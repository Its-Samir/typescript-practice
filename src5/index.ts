// abstact classes and interfaces
//static properties and methods (static properties and methods can be accessed without instantiating the class)
class Automobile {
    static color: string = 'green';
    static calcMilage(miles: number, liters: number) {
        return miles / liters;
    }
}

// in js Math object has its many static method that's why we can use it without instantiating it;
console.log(Math.PI)

console.log(Automobile.color);
console.log(Automobile.calcMilage(50, 15));

//------------------------------------------------------------------------------------------------------------------------

// abstract class (abstract classes cannot be instantiated but can inherited, this is different from normal classes, but its child classes can be instantiated)

// holidays will be array of objects
type Holidays = {
    date: Date;
    reason: string;
}[];

abstract class Department {
    // Once an abstract member (here is holidays) is declared in the parent class, the child class must implement its own functionality (member) of the abstract class. So whenever someone would try to create a new class by inheriting the parent abstract class, typescript will force them to implement or create that holidays property inside that child class. The advantages is that each child class can have their own properties and the values of those properties can be different. (in short: all the abstract member that are implemented or declared in the parent class need to be declared inside each of its child classes also)
    protected abstract holidays: Holidays;

    // since abstract classes cannot be instantiated, so it dose not make sense to make this constructor public (but we can make it public and its child classes can be instantiated when this is public but in abstract classes we do not want this)
    protected constructor(protected name: string) { }

    // this method will be available inside its child classes as well
    addHolidays(holidays: Holidays) {
        // checking if holidays is an array or not
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }
    }

    // this method will be available inside its child classes as well
    printHolidays() {
        if (this.holidays.length > 0) {
            return this.holidays.forEach((h, i) => {
                return console.log(h);
            })
        }
        return console.log('no holidays');
    }
}

class DepartmentOne extends Department {
    protected holidays: Holidays = []
    constructor() {
        super('DepartementOne')
    }
}
class DepartmentTwo extends Department {
    protected holidays: Holidays = []
    constructor() {
        super('DepartementTwo')
    }
}

const departmentOneHoliday: Holidays = [
    {
        date: new Date(2019, 12, 25),
        reason: 'Christmas'
    },
    {
        date: new Date(2019, 3, 15),
        reason: 'Holi'
    }
];

const departmentTwoHoliday: Holidays = [
    {
        date: new Date(2019, 12, 25),
        reason: 'Durga Puja'
    },
    {
        date: new Date(2019, 3, 15),
        reason: 'Diwali'
    }
];

// instantiating child classes (though the child classes of parent abstract class can be instantiated)
const departmentOne: DepartmentOne = new DepartmentOne();
const departmentTwo: DepartmentTwo = new DepartmentTwo();

// adding holidays array by addHolidays method which belongs to Department abstract classs
departmentOne.addHolidays(departmentOneHoliday);
departmentTwo.addHolidays(departmentTwoHoliday);

console.log(departmentOne);
departmentTwo.printHolidays(); // just calling it, if we log it in console will get extra undefined log

//------------------------------------------------------------------------------------------------------------------------

//method overiding in child classes
//now method overriding means that everythings remains same in the above code, but if we want the printHolidays() method to modify it for each instance, lets say we want to modify like this `Holidays for ${this.name}` every child class of abstract class will have title like this, then we can just copy the method from the parent Departement class and paste it in certain child class then specify this line `Holidays for ${this.name}`, so that each class will have their own title with there class name, after that if we call the printHolidays() method it will trigger the child classes's printHolidays() method not the parent Department class's printHolidays() method (note: here is also chance for code repition, so next we can use abstract method for it)

//------------------------------------------------------------------------------------------------------------------------

// abstract method

type Holidays2 = {
    date: Date;
    reason: string;
}[];

abstract class Department2 {
    // Once an abstract member (here is holidays) is declared in the parent class, the child class must implement its own functionality (member) of the abstract class. So whenever someone would try to create a new class by inheriting the parent abstract class, typescript will force them to implement or create that holidays property inside that child class. The advantages is that each child class can have their own properties and the values of those properties can be different. (in short: all the abstract member that are implemented or declared in the parent class need to be declared inside each of its child classes also)
    protected abstract holidays: Holidays2;

    // since abstract classes cannot be instantiated, so it dose not make sense to make this constructor public (but we can make it public and its child classes can be instantiated when this is public but in abstract classes we do not want this)
    protected constructor(protected name: string) { }

    // this method will be available inside its child classes as well
    addHolidays(holidays: Holidays2) {
        // checking if holidays is an array or not
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }
    }

    // now here just like holidays member (property) ts will force us to declare printHolidays() method inside all the child classes of Department class
    abstract printHolidays(): void
}

class DepartmentThree extends Department2 {
    protected holidays: Holidays2 = []

    constructor() {
        super('DepartementThree') // as we cannot instantiate abstract classes but we can pass argument like this to assign name as Department class need only one parameter called name
    }

    printHolidays(): void {
        if (this.holidays.length > 0) {
            return this.holidays.forEach((h, i) => {
                return console.log(h);
            })
        }
        return console.log('no holidays');
    }
}
class DepartmentFour extends Department2 {
    protected holidays: Holidays2 = []

    constructor() {
        super('DepartementFour') // as we cannot instantiate abstract classes but we can pass argument like this to assign name as Department class need only one parameter called name
    }

    printHolidays(): void {
        if (this.holidays.length > 0) {
            return this.holidays.forEach((h, i) => {
                return console.log(h);
            })
        }
        return console.log('no holidays');
    }
}

const departmentThreeHoliday: Holidays2 = [
    {
        date: new Date(2019, 12, 25),
        reason: 'Christmas'
    },
    {
        date: new Date(2019, 3, 15),
        reason: 'Holi'
    }
];

const departmentFourHoliday: Holidays2 = [
    {
        date: new Date(2019, 12, 25),
        reason: 'Durga Puja'
    },
    {
        date: new Date(2019, 3, 15),
        reason: 'Diwali'
    }
];

// instantiating child classes (although the child classes of parent abstract classes can be instantiated)
const departmentThree: DepartmentThree = new DepartmentThree();
const departmentFour: DepartmentFour = new DepartmentFour();

// adding holidays array by addHolidays method which belongs to Department abstract classs
departmentThree.addHolidays(departmentThreeHoliday);
departmentFour.addHolidays(departmentFourHoliday);

console.log(departmentThree);
departmentFour.printHolidays(); // just calling it, if we log it in console will get extra undefined log

//------------------------------------------------------------------------------------------------------------------------

// interfaces (interfaces are like contracts, means interfaces defines in advance how an object or a class structure is going to look). Interfaces are the blue print of the final object that a class will create and since objects do not have any access modifiers, that applies to interfaces as well. For example, If a class is implementing any interfaces then all the member (properties) which belongs to the interface need to be public inside that class otherwise ts will throw error, but that class itself can have its own private or protected members (properties), only those members (properties) which are belongs to the interface need to be pulic.

// 1. we can declare interface with same name and ts will merge them together
// 2. interface can extends each other
// 3. we cannot use static methods in interfaces (can only use either inside normal classes or inside abstract classes)
// 4. abstract classes and interfaces both provide us a contract of blue print that need be followed by us if we are impletenting it incase of interfaces or inheriting it incase of abstract classes (all the members/properties of it should be defined)

interface Person {
    name: string;
    email: string;
    age: number;
    phone?: number;
}

// ts will merge this interface with the above Person interface
interface Person {
    greet?: () => void // we declared it as optional but if we make it mandatory ts will force us to add greet method in the personOne variable
}

const personOne: Person = {
    name: 'PersonOne',
    email: 'personone@test.com',
    age: 21,
}

//extending (inheriting) interfaces
interface User {
    name: string;
    email: string;
    phone: number;
}

interface UserWithAddress extends User {
    address: string;
}

const userOne: UserWithAddress = {
    name: 'UserOne',
    email: 'userone@test.com',
    phone: 123456890,
    address: 'some address'
}

console.log(personOne);
console.log(userOne);

// multiple inheritance (extends)
enum Roles {
    admin = 'admin',
    author = 'author',
    editor = 'editor'
}

enum PersmissionList {
    read = 'read',
    write = 'write',
    execute = 'exucute'
}

interface UserPermission {
    permission: PersmissionList[] // so that we are bound to have only 3 permissions, means we cannot assign any other persmission that are not available inside of Persmissions Enum or outside (cannot manually assign any other persmission)
}

interface Role {
    role: Roles // so that we are bound to have only 3 roles, means we cannot assign any other roles that are not available inside of Roles Enum or outside (cannot manually assign any other roles)
}

// extending 3 interfaces in AdminUser interface
interface AdminUser extends User, Role, UserPermission {
    numberOfUsersReporting: number
}

const adminUser: AdminUser = {
    name: 'AdminUser',
    email: 'admin@test.com',
    phone: 112343555,
    role: Roles.admin,
    permission: [PersmissionList.read, PersmissionList.execute, PersmissionList.write],
    numberOfUsersReporting: 5
}

console.log(adminUser);

//------------------------------------------------------------------------------------------------------------------------

// generics with interfaces

// lets say we declare an interface but here user can provide any value according to the type (string, number), we want user to choose correct inputs other than unknown inputs and maintain the flexiblity to choose types
interface Automobile {
    type: string; //it could be car, truck etc (but user can provide any value (string) other than the Vehicle type)
    brand: string; // here also user can provide any value (string) other than brand name (we do not have any strict typing here)
    colors: string[], // here also user can provide any value (string) other than colors
    description: string
}

// using generics (generics make types strict more flexible)
interface Automobile2<Type, Brand, Color> {
    type: Type;
    brand: Brand;
    colors: Color[],
    description: string
}

enum AutomobileType {
    car = 'car',
    bus = 'bus',
    truck = 'truck',
    bike = 'bike'
}

enum AutomobileBrand {
    honda = 'honda',
    bmw = 'bmw',
    fereri = 'fereri',
    toyota = 'toyota'
}

enum AutomobileColor {
    red = 'red',
    black = 'black',
    yellow = 'yellow',
    green = 'green'
}

// example with Enums which makes more strict typing (we are bound to select the options that are inside these enums)
const toyota: Automobile2<AutomobileType, AutomobileBrand, AutomobileColor> = {
    type: AutomobileType.car,
    brand: AutomobileBrand.toyota,
    colors: [AutomobileColor.red],
    description: 'some description here'
}

// another example, this is the flexiblity of generics we can use any types while delcaring variables (here is <string, string, string>)
const honda: Automobile2<string, string, string> = {
    type: 'car',
    brand: 'honda',
    colors: ['yellow'],
    description: 'some description here again'
}

// another example for flexibility to choose types while using generics
const fereri: Automobile2<string, AutomobileBrand, number> = {
    type: 'car',
    brand: AutomobileBrand.fereri,
    colors: [12344, 44323],
    description: 'some description here again'
}

console.log(toyota);
console.log(honda);
console.log(fereri);

//------------------------------------------------------------------------------------------------------------------------

// using interfaces with classes (along with generics)
class Car implements Automobile2<string, AutomobileBrand, AutomobileColor> {
    type: string = 'car';
    constructor(public brand: AutomobileBrand, public colors: AutomobileColor[], public description: string) { }
}

const car: Car = new Car(AutomobileBrand.toyota, [AutomobileColor.green], 'Again some description here.');
console.log(car);

// another class example with same interface
class Truck implements Automobile2<string, AutomobileBrand, AutomobileColor> {
    type: string = 'truck';
    constructor(public brand: AutomobileBrand, public colors: AutomobileColor[], public description: string) { }
}

const truck: Truck = new Truck(AutomobileBrand.honda, [AutomobileColor.yellow], 'This is a Description.');
console.log(truck);

// implementing multiple interfaces in class (note: A class can inherite from only one parent class means a class can have only one parent class from which it has been extended/inherited but a class can implements multiple interfaces and this thing increases the importance of OOP)
interface CommercialVehicle {
    capacity: string;
    licenseRenewalDate: Date;
}

// implementing multiple interfaces in class
class Truck2 implements Automobile2<string, AutomobileBrand, AutomobileColor>, CommercialVehicle {
    type: string = 'truck';
    constructor(public brand: AutomobileBrand, public colors: AutomobileColor[], public description: string, public capacity: string, public licenseRenewalDate: Date) { }
}

const truck2: Truck2 = new Truck2(AutomobileBrand.honda, [AutomobileColor.yellow], 'Some Description', '15 Ton', new Date());
console.log(truck2);

// now what should we use abstract classes or interfaces
// - there is no streight forward answer for it, it depends on a certain task (like fast running scripts/operations, design patterns etc) whether there interface would be better or abstract class