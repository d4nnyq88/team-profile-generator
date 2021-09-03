const Intern = require("../lib/Intern");

describe("Intern", () => {
    test("Can instantiate Intern instance", () => {
        const e = new Intern();
        expect(typeof e).toBe("object");
    });

    test("Can set school via constructor arguments", () => {
        const school = "GaTech";
        const e = new Intern("Bob", 1, "test@test.com", school);
        expect(e.school).toBe(school);
    });
    
    test("Can get school via getSchool()", () => {
        const school = "GaTech";
        const e = new Intern("Bob", 1, "test@test.com", school);
        expect(e.getSchool()).toBe(school);
    });      
});