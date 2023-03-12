"use strict";
// abstact classes and interfaces
//static properties and methods (static properties and methods can be accessed without instantiating the class)
class Automobile {
    static color = 'green';
    static calcMilage(miles, liters) {
        return miles / liters;
    }
}
// in js Math object has its many static method that's why we can use it without instantiating it;
console.log(Math.PI);
console.log(Automobile.color);
console.log(Automobile.calcMilage(50, 15));
class Department {
    name;
    // since abstract classes cannot be instantiated, so it dose not make sense to make this constructor public (but we can make it public and its child classes can be instantiated when this is public but in abstract classes we do not want this)
    constructor(name) {
        this.name = name;
    }
    // this method will be available inside its child classes as well
    addHolidays(holidays) {
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
            });
        }
        return console.log('no holidays');
    }
}
class DepartmentOne extends Department {
    holidays = [];
    constructor() {
        super('DepartementOne');
    }
}
class DepartmentTwo extends Department {
    holidays = [];
    constructor() {
        super('DepartementTwo');
    }
}
const departmentOneHoliday = [
    {
        date: new Date(2019, 12, 25),
        reason: 'Christmas'
    },
    {
        date: new Date(2019, 3, 15),
        reason: 'Holi'
    }
];
const departmentTwoHoliday = [
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
const departmentOne = new DepartmentOne();
const departmentTwo = new DepartmentTwo();
// adding holidays array by addHolidays method which belongs to Department abstract classs
departmentOne.addHolidays(departmentOneHoliday);
departmentTwo.addHolidays(departmentTwoHoliday);
console.log(departmentOne);
departmentTwo.printHolidays(); // just calling it, if we log it in console will get extra undefined log
class Department2 {
    name;
    // since abstract classes cannot be instantiated, so it dose not make sense to make this constructor public (but we can make it public and its child classes can be instantiated when this is public but in abstract classes we do not want this)
    constructor(name) {
        this.name = name;
    }
    // this method will be available inside its child classes as well
    addHolidays(holidays) {
        // checking if holidays is an array or not
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }
    }
}
class DepartmentThree extends Department2 {
    holidays = [];
    constructor() {
        super('DepartementThree'); // as we cannot instantiate abstract classes but we can pass argument like this to assign name as Department class need only one parameter called name
    }
    printHolidays() {
        if (this.holidays.length > 0) {
            return this.holidays.forEach((h, i) => {
                return console.log(h);
            });
        }
        return console.log('no holidays');
    }
}
class DepartmentFour extends Department2 {
    holidays = [];
    constructor() {
        super('DepartementFour'); // as we cannot instantiate abstract classes but we can pass argument like this to assign name as Department class need only one parameter called name
    }
    printHolidays() {
        if (this.holidays.length > 0) {
            return this.holidays.forEach((h, i) => {
                return console.log(h);
            });
        }
        return console.log('no holidays');
    }
}
const departmentThreeHoliday = [
    {
        date: new Date(2019, 12, 25),
        reason: 'Christmas'
    },
    {
        date: new Date(2019, 3, 15),
        reason: 'Holi'
    }
];
const departmentFourHoliday = [
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
const departmentThree = new DepartmentThree();
const departmentFour = new DepartmentFour();
// adding holidays array by addHolidays method which belongs to Department abstract classs
departmentThree.addHolidays(departmentThreeHoliday);
departmentFour.addHolidays(departmentFourHoliday);
console.log(departmentThree);
departmentFour.printHolidays(); // just calling it, if we log it in console will get extra undefined log
const personOne = {
    name: 'PersonOne',
    email: 'personone@test.com',
    age: 21,
};
const userOne = {
    name: 'UserOne',
    email: 'userone@test.com',
    phone: 123456890,
    address: 'some address'
};
console.log(personOne);
console.log(userOne);
// multiple inheritance (extends)
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["author"] = "author";
    Roles["editor"] = "editor";
})(Roles || (Roles = {}));
var PersmissionList;
(function (PersmissionList) {
    PersmissionList["read"] = "read";
    PersmissionList["write"] = "write";
    PersmissionList["execute"] = "exucute";
})(PersmissionList || (PersmissionList = {}));
const adminUser = {
    name: 'AdminUser',
    email: 'admin@test.com',
    phone: 112343555,
    role: Roles.admin,
    permission: [PersmissionList.read, PersmissionList.execute, PersmissionList.write],
    numberOfUsersReporting: 5
};
console.log(adminUser);
var AutomobileType;
(function (AutomobileType) {
    AutomobileType["car"] = "car";
    AutomobileType["bus"] = "bus";
    AutomobileType["truck"] = "truck";
    AutomobileType["bike"] = "bike";
})(AutomobileType || (AutomobileType = {}));
var AutomobileBrand;
(function (AutomobileBrand) {
    AutomobileBrand["honda"] = "honda";
    AutomobileBrand["bmw"] = "bmw";
    AutomobileBrand["fereri"] = "fereri";
    AutomobileBrand["toyota"] = "toyota";
})(AutomobileBrand || (AutomobileBrand = {}));
var AutomobileColor;
(function (AutomobileColor) {
    AutomobileColor["red"] = "red";
    AutomobileColor["black"] = "black";
    AutomobileColor["yellow"] = "yellow";
    AutomobileColor["green"] = "green";
})(AutomobileColor || (AutomobileColor = {}));
// example with Enums which makes more strict typing (we are bound to select the options that are inside these enums)
const toyota = {
    type: AutomobileType.car,
    brand: AutomobileBrand.toyota,
    colors: [AutomobileColor.red],
    description: 'some description here'
};
// another example, this is the flexiblity of generics we can use any types while delcaring variables (here is <string, string, string>)
const honda = {
    type: 'car',
    brand: 'honda',
    colors: ['yellow'],
    description: 'some description here again'
};
// another example for flexibility to choose types while using generics
const fereri = {
    type: 'car',
    brand: AutomobileBrand.fereri,
    colors: [12344, 44323],
    description: 'some description here again'
};
console.log(toyota);
console.log(honda);
console.log(fereri);
//------------------------------------------------------------------------------------------------------------------------
// using interfaces with classes (along with generics)
class Car {
    brand;
    colors;
    description;
    type = 'car';
    constructor(brand, colors, description) {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
    }
}
const car = new Car(AutomobileBrand.toyota, [AutomobileColor.green], 'Again some description here.');
console.log(car);
// another class example with same interface
class Truck {
    brand;
    colors;
    description;
    type = 'truck';
    constructor(brand, colors, description) {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
    }
}
const truck = new Truck(AutomobileBrand.honda, [AutomobileColor.yellow], 'This is a Description.');
console.log(truck);
// implementing multiple interfaces in class
class Truck2 {
    brand;
    colors;
    description;
    capacity;
    licenseRenewalDate;
    type = 'truck';
    constructor(brand, colors, description, capacity, licenseRenewalDate) {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
        this.capacity = capacity;
        this.licenseRenewalDate = licenseRenewalDate;
    }
}
const truck2 = new Truck2(AutomobileBrand.honda, [AutomobileColor.yellow], 'Some Description', '15 Ton', new Date());
console.log(truck2);
// now what should we use abstract classes or interfaces
// - there is no streight forward answer for it, it depends on a certain task (like fast running scripts/operations, design patterns etc) whether there interface would be better or abstract class
