const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
  const e = new Manager();
  expect(typeof e).toBe("object");
});

test("Can set Manager name via these agruments", () => {
  const name = "Susan Tart";
  const e = new Manager(name);
  expect(e.name).toBe(name);
});

test("Can set Manager id via these agruments", () => {
  const id = 444;
  const e = new Manager("Susan Tart", 444);
  expect(e.id).toBe(id);
});

test("Can set Manager email via these agruments", () => {
  const email = "tartsusan@gmail.com";
  const e = new Manager("Susan Tart", 444, email);
  expect(e.email).toBe(email);
});

test("Can set manager office number via these agruments", () => {
  const officeNumber = 674587;
  const e = new Manager("Susan Tart", 444, "tartsusan@gmail.com", officeNumber);
  expect(e.officeNumber).toBe(officeNumber);
});

test("Can set manager role via these agruments", () => {
  const role = "Manager";
  const e = new Manager("Susan Tart", 444, "tartsusan@gmail.com", 674587, role);
  expect(e.role).toBe(role);
});
