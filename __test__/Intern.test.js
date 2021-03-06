const Intern = require("../lib/Intern");

test("Can instantiate Intern instance", () => {
  const e = new Intern();
  expect(typeof e).toBe("object");
});

test("Can set Intern name via these arguments", () => {
  const name = "Susan Tart";
  const e = new Intern(name);
  expect(e.name).toBe(name);
});

test("Can set Intern id via these arguments", () => {
  const id = 444;
  const e = new Intern("Susan Tart", 444);
  expect(e.id).toBe(id);
});

test("Can set Intern email via these arguments", () => {
  const email = "tartsusan@gmail.com";
  const e = new Intern("Susan Tart", 444, email);
  expect(e.email).toBe(email);
});

test("Can set Intern school via these arguments", () => {
  const school = "North Carolina State University";
  const e = new Intern("Susan Tart", 444, "tartsusan@gmail.com", school);
  expect(e.school).toBe(school);
});

test("Can set Intern role via these arguments", () => {
  const role = "Intern";
  const e = new Intern(
    "Susan Tart",
    444,
    "tartsusan@gmail.com",
    "North Carolina State University",
    role
  );
  expect(e.role).toBe(role);
});
