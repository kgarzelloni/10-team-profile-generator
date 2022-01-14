const Employee = require("./employee");
const robert = new Employee("robert", 12, "robert@yahoo.com")

describe ('getName', () => {
    it('should return the name of the employee when a name is added to the name field',() => {
        expect(robert.getName()).toBe("robert");
    })
    });

