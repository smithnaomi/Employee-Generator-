const Employee = require("../lib/Employee");
test("Can name be set via these agruments?", () => {
  const name = "Susan";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
