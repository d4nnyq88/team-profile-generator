//test only what is unique to Engineer
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    test("Can instantiate Engineer instance", () => {
        const e = new Engineer();
        expect(typeof e).toBe("object");
    });

    test("Can set github via constructor arguments", () => {
        const github = "mygithub";
        const e = new Engineer("Bob", 1, "test@test.com", github);
        expect(e.github).toBe(github);
    });
    
    test("Can get github via getGithub()", () => {
        const github = "mygithub";
        const e = new Engineer("Bob", 1, "test@test.com", github);
        expect(e.getGithub()).toBe(github);
    });      
});