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
        const email = "test@test.com";
        const e = new Employee("Bob", 1, email);
        expect(e.email).toBe(email);
    });
    
    test("Can set Id via constructor arguments", () => {
        const id = 2;
        const e = new Employee("Bob", 2);
        expect(e.id).toBe(id);
    });
    
    test("Can get name via getName()", () => {
        const name = "Alice";
        const e = new Employee(name);
        expect(e.getName()).toBe(name);
    });
    
    test("Can get Id via getId()", () => {
        const id = 1;
        const e = new Employee("Bob", id);
        expect(e.getId()).toBe(id);
    });
    
    test("Can get role via getRole()", () => {
        const role = "Employee";
        const e = new Employee(role);
        expect(e.getRole()).toBe(role);
    });
});