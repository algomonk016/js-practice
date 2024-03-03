function Developer(name) {
    this.name = name;
    this.type = "Developer";
}

function Tester(name) {
    this.name = name;
    this.type = "Tester";
}

function EmployeeFactory() {
    this.create = function(name, type){
        switch(type) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
        }
    }
}

function say() {
    console.log(`Hey, ${this.name} here, I'm a ${this.type}`);
}

function run() {
    const employeeFactory = new EmployeeFactory();
    const employees = [];
    employees.push(employeeFactory.create("shivesh", 1));
    employees.push(employeeFactory.create("tiwari", 2));
    employees.push(employeeFactory.create("Shreya", 1));
    employees.push(employeeFactory.create("Mohit", 1));
    employees.push(employeeFactory.create("Akash", 1));

    employees.forEach(emp => {
        say.call(emp);
    });
}


run();