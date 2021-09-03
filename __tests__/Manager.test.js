const Manager = require("../lib/Manager");

describe("Manager", () => {
    test("Can instantiate Manager instance", () => {
        const e = new Manager();
        expect(typeof e).toBe("object");
    });

    test("Can set officeNumber via constructor arguments", () => {
        const officeNumber = 2;
        const e = new Manager("Bob", 1, "test@test.com", officeNumber);
        expect(e.officeNumber).toBe(officeNumber);
    });
    
    test("Can get officeNumber via getOfficeNumber()", () => {
        const officeNumber = 2;
        const e = new Manager("Bob", 1, "test@test.com", officeNumber);
        expect(e.getOfficeNumber()).toBe(officeNumber);
    });      
});