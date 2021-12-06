const Engineer = require("../lib/Engineer");

test("Can instantiate engineer instance", () => {
  const e = new Engineer();
  expect(typeof e).toBe("object");
});

test("Can set engineer name via these agruments", () => {
  const name = "Susan Tart";
  const e = new Engineer(name);
  expect(e.name).toBe(name);
});

test("Can set engineer id via these agruments", () => {
  const id = 444;
  const e = new Engineer("Susan Tart", 444);
  expect(e.id).toBe(id);
});

test("Can set engineer email via these agruments", () => {
  const email = "tartsusan@gmail.com";
  const e = new Engineer("Susan Tart", 444, email);
  expect(e.email).toBe(email);
});

test("Can set engineer github username via these agruments", () => {
  const github = "susantart";
  const e = new Engineer("Susan Tart", 444, "tartsusan@gmail.com", github);
  expect(e.github).toBe(github);
});

test("Can set engineer role via these agruments", () => {
  const role = "Engineer";
  const e = new Engineer(
    "Susan Tart",
    444,
    "tartsusan@gmail.com",
    "susantart",
    role
  );
  expect(e.role).toBe(role);
});
