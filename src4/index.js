"use strict";
// class and inheritance
// A class is a blueprint of creating/certain objects. A class defines the initial values of various properties and methods of an object.
// So in this case, a class can help us define that a person object will always contain two properties that is the name and email address of the person and one method that is the say method. (inside any objects the functions are known/referred to as method)
let person = {
    name: 'ghosty',
    email: 'ghosty@test.com',
    say: () => console.log('Hello')
};
//--------------------------------------------------------------------------------------------------------------------
// defining class
class Person {
    name = 'ghosty';
    email = 'ghosty@test.com';
    greet() {
        return `Hello ${this.name}`;
    }
}
// creating an instance
const personOne = new Person();
console.log(personOne); // Person {name: 'ghosty', email: 'ghosty@test.com'} (it is saying that this is the intance of Person class) in the prototype option the greet method will be present there
console.log(personOne.greet());
// ------------------------------------------------------------------------------------------------------------------------
//constructor function (it triggers/fires whenever the class is instantiated)
class Person2 {
    name = 'ghosty';
    email = 'ghosty@test.com';
    constructor(name, email) {
        console.log(`name: ${name}`);
        console.log(`email: ${email}`);
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
// instantiating Person2 class (hence the constructor function will trigger)
const personTwo = new Person2('Ghosty', 'ghosty@test.com');
console.log(personTwo);
// ------------------------------------------------------------------------------------------------------------------------
class Person3 {
    name; //in constructor function we are saying that this name is equal to the constructor function's parameter name
    email; //in constructor function we are saying that this email is equal to the constructor function's parameter email
    constructor(name, email) {
        // if we do not define this.name = name or email then as we set name: string, email: string it will throw error because name and email only available inside constructor function so with the help of this keyword we are making it available inside this whole Person3 class. (see the above examples where we can manually set the name = 'ghosty', email = 'ghosty@test.com but in order to set types we have to follow this approach)
        this.name = name;
        this.email = email;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
// instantiating Person3 class (hence the constructor function will trigger)
const personThree = new Person3('Shadow', 'shadow@test.com');
console.log(personThree);
console.log(personThree.greet());
// ------------------------------------------------------------------------------------------------------------------------
// inheritance
class User {
    name;
    email;
    age;
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
// inheriting AdminUser class with User class (means all the property that are present in the User class AdminUser class will also have access to those properties)
class AdminUser extends User {
    // this isAdmin property will only have access to AdminUser class
    isAdmin = true;
}
const userOne = new User('Userone', 'userone@test.com', 21);
const adminUser = new AdminUser('adminUser', 'admin@test.com', 20);
console.log(userOne);
console.log(adminUser);
// ------------------------------------------------------------------------------------------------------------------------
// super method
class User2 {
    name;
    email;
    age;
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
class AdminUser2 extends User2 {
    isAdmin = true;
    usersReporting;
    // now AdminUser2 has its own constructor function, but as we are inheriting the User class we have to pass all parameter that are inside User2 class along with AdminUser2 class's own parameter (like here usersReporting) and then by using super method we have to pass those parameter inside it that are belong to the parent class (name, email, age)
    constructor(name, email, age, usersReporting) {
        // In child class, The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
        super(name, email, age);
        this.usersReporting = usersReporting;
    }
}
const userTwo = new User2('Usertow', 'usertwo@test.com', 21);
const adminUserTwo = new AdminUser2('adminUser2', 'admin2@test.com', 20, 1);
console.log(userTwo);
console.log(adminUserTwo);
// ------------------------------------------------------------------------------------------------------------------------
// access modifiers (restricts/prevents something from accessing it) (public, protected, private)
class Person4 {
    name; //private only accessible within class
    age; //protected only accessible within class and its subclasses (child classes)
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Admin extends Person4 {
    getAge() {
        return this.age;
    }
}
const personFour = new Person4('PersonFour', 21);
//despite Person4 having private property called name, we are still able instantiate Admin class by assigning name and age, the reason is for that javascript as of now do not have any access modifiers supports, but we cannot access it like admin.name
const admin = new Admin('Admin', 20);
// returns the name property, because getName method does have access to the name property
console.log(personFour.getName());
// returns the age property, because getAge method does have access to the age property
console.log(admin.getAge());
// console.log(admin.name); // Property 'name' is private and only accessible within class 'Person4'.
// console.log(admin.age); // Property 'age' is protected and only accessible within class 'Person4' and its subclasses (child classes).
// ------------------------------------------------------------------------------------------------------------------------
//shorthand syntax for initial properties (whenever the class will be instantiated it knows that the class itself need two properties)
class Person5 {
    name;
    age;
    // we should use access modifiers for using shorthand syntax even if any property is public we have to explicitly set it public otherwise it will not work
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
const personFive = new Person5('PersonFive', 21);
console.log(personFive);
// ------------------------------------------------------------------------------------------------------------------------
// mutator and accessor (setter and getter)
// if we do want someone to enter invalid age (validation), this is how we can appraoch it, but this appraoch has a flaw (if any of the property is public then we can manipulate it outside of the class and it subclasses)
class Person6 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // (appraoch): checking conditionaly (if there are lot of conditional checking then doing that inside a constructor is not good)
        if (age > 200 || age < 0) {
            throw new Error('Enter valid age between 0-200');
        }
    }
    getName() {
        return this.name;
    }
}
//now here if we instantiate Person6 class the constructor will be trigger and if we enter invalid age then usually it will give error as the if statement is inside the constructor, which is ok but we can do it by setter and getter
const personSix = new Person6('PersonFive', 10);
console.log(personSix);
// ------------------------------------------------------------------------------------------------------------------------
// mutator and accessor (setter and getter)
class Person7 {
    name;
    // now usually if our property age and setter and getter method name are same then most developers use underscore (_age) to make it clear which property are use for what. This is because if we use same name for setter and getter method and property as well and then inside those setter and getter method if we try to use/access that same name property by this keyword this.<samePropertyName>, hence there is a chance to making and endless loop. For example: if we have a property age; and a method set age(input: number) {this.age = age} here instead of accessing the age property maybe there is a high chance that we are by mistake accessing the set method which has the same name called age() which will end up with infinite loop. (source: got to know from online)
    age; // we have set this undefined along with number, because unless/until we call the setter method (here is setAge, <varibleName>.setAge = 20) the age of this Person7 class will be not be defined. (so age either be a number or undefined)
    constructor(name) {
        this.name = name;
    }
    //setter (validation inside setter method is good). setter method can have only one parameter
    set setAge(age) {
        if (age > 200 || age < 0) {
            throw new Error('Enter valid age between 0-200');
        }
        this.age = age;
    }
    //getter (get/access the age). getter method cannot have any parameters
    get getAge() {
        //checking if the _age
        if (this.age === undefined) {
            throw new Error('Age property has not been set yet');
        }
        return this.age;
    }
    getName() {
        return this.name;
    }
}
const personSeven = new Person7('PersonSeven');
personSeven.setAge = 20;
console.log(personSeven);
// ------------------------------------------------------------------------------------------------------------------------
// getter and setter (with underscore(_) example
class Person8 {
    name;
    _age;
    constructor(name) {
        this.name = name;
    }
    set age(age) {
        if (age > 200 || age < 0) {
            throw new Error('Enter valid age between 0-200');
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error('age property has not been set yet');
        }
        return this._age;
    }
    getName() {
        return this.name;
    }
}
const PersonEight = new Person8('PersonEight');
PersonEight.age = 21; // here typescript will automatically infer that we want to assign/set the age
console.log(PersonEight.age); // here typescript will automatically infer that we want to access/get the age and it does not need parenthisis ()
console.log(PersonEight);
// ------------------------------------------------------------------------------------------------------------------------
// refining/improving the class (getter and setter continued)
class Person9 {
    _name;
    _age;
    //validating age conditionally by normal private method (this is for avoiding repitition of code inside setter methods)
    // here i have a query which i posted, if we do not want setter and getter then do we have to use this appraoch to for any validation
    testUserAge(age) {
        if (age > 200 || age < 0) {
            throw new Error('Enter valid age between 0-200');
        }
        return age;
    }
    //validating name conditionally by normal private method (this is for avoiding repitition of code inside setter methods)
    // here i have a query which i posted, if we do not want setter and getter then do we have to use this appraoch to for any validation
    testUserName(name) {
        if (name.trim().length === 0 || name.trim().length > 100) {
            throw new Error('Please enter a Name and the name should be less than 100 letter');
        }
        return name;
    }
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        this.testUserName(_name);
        this._name = _name;
        this.testUserAge(_age);
        this._age = _age;
    }
    set name(name) {
        this.testUserName(name);
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set age(age) {
        this.testUserAge(age);
        this._age = age;
    }
    get age() {
        return this._age;
    }
}
const PersonNine = new Person9('PersonNine', 19);
console.log(PersonNine.age, PersonNine.name); // get/access the age and name
PersonNine.name = 'PersonNine changed';
console.log(PersonNine);
