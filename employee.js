function Employee(name, age, jobTitle, salary, raiseAmount) {
    this.name = name;
    this .age = age;
    this. jobTitle = jobTitle;
    this.salary= salary;
    this.raiseAmount= raiseAmount;

   this.giveARaise = function (raiseAmount)
    {
        this.salary += raiseAmount;
        console.log("💰 " + salary);
    }
}

let mojo = new Employee("mojo", 25, "programmer", 100000, 1000);
console.log(mojo)
mojo.giveARaise(10000);
console.log(mojo.salary);
mojo.giveARaise(23);
console.log(mojo.salary)