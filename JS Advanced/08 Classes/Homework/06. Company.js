class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(username, salary, position, department) {
        if (username === '' || salary === '' || position === '' || department === '' ||
            username === undefined || salary === undefined || position === undefined || department === undefined ||
            username === null || salary === null || position === null || department === null) {
            throw new Error(`Invalid input!`);
        }

        if (salary < 0) {
            throw new Error(`Invalid input!`);
        }

        this.departments[department] = {
            username,
            salary,
            position
        }


        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment() {


    }
}




let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction")
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.departments)
// console.log(c.bestDepartment());