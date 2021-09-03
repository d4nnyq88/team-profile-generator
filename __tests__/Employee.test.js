const Employee = require("../lib/Employee");

describe("Employee", () => {
    test("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof e).toBe("object");
    });

    test("Can set name via constructor arguments", () => {
        const name = "Alice";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
    
    test("Can set email via constructor arguments", () => {
        const testValue = "test@test.com";
        const e = new Employee("Bob", 1, testValue);
        expect(e.email).toBe(testValue);
    });
    
    test("Can get name via getName()", () => {
        const testValue = "Alice";
        const e = new Employee(testValue);
        expect(e.getName()).toBe(testValue);
    });

    //test methods?
});