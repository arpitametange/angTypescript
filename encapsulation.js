var Employee = /** @class */ (function () {
    function Employee() {
        this.emp_Name = "Codemind";
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            if (true) {
                return this.emp_Name;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var man = new Employee();
// 
console.log(man.name);
var Person = /** @class */ (function () {
    function Person() {
        this.name3 = 12;
    }
    Object.defineProperty(Person.prototype, "name2", {
        get: function () {
            return this.name3;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var oob = new Person();
oob.name3;
