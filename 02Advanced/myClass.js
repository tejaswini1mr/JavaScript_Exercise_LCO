class User {
    constructor(firstname, lastname, credit) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }

    getFullName() {
        let fullname = `${this.firstname} ${this.lastname} is my full name`;
        return fullname;
    }

    editName(newname) {
        const myname = newname.split(" ");
        this.firstname = myname[0];
        this.lastname = myname[1];
    }
}

//Inheritance and method overriding 
class Teacher extends User {
    constructor(firstname, lastname, credit, subject) {
        super(firstname, lastname, credit);
        this.subject = subject;
    }
    
    getFullName() {
        let fullname = `${this.firstname} ${this.lastname} is my full name and I teach ${this.subject}`;
        return fullname;
    }
    favSports(name) {
        console.log(`My Fav. Sports is ${name}`);
    }
}

const john = new Teacher("john", "Anderson", 34, "python");
//console.log(john);
console.log(john.getFullName());
john.editName('Johnny sin');
console.log(john.getFullName());
john.favSports('BasketBall')