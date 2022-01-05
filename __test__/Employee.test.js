const Employee = require("../lib/Employee");

test("Can instantiate employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Can name be set via these arguments?", () => {
  const name = "Susan Tart";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set employee id via these arguments", () => {
  const id = 444;
  const e = new Employee("Susan Tart", 444);
  expect(e.id).toBe(id);
});

test("Can set employee email via these arguments", () => {
  const email = "tartsusan@gmail.com";
  const e = new Employee("Susan Tart", 444, email);
  expect(e.email).toBe(email);
});

test("Can set employee role via these arguments", () => {
  const role = "Employee";
  const e = new Employee("Susan Tart", 444, "tartsusan@gmail.com", role);
  expect(e.role).toBe(role);
});
