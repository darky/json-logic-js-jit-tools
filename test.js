import { test } from "uvu";
import { equal } from "uvu/assert";

import "./index.js";
import { compile } from "json-logic-js-jit";

test("log", () => {
  const fn = compile({ log: [1, 2] });
  fn(3);
});

test("var object", () => {
  const fn = compile({ var: ["fruit"] });
  equal(fn({ fruit: "apple" }), "apple");
});

test("var array", () => {
  const fn = compile({ var: [1] });
  equal(fn(["apple", "banana"]), "banana");
});

test("var void", () => {
  const fn = compile({ var: [0] });
  equal(fn([]), void 0);
});

test("if true", () => {
  const fn = compile({ if: [true, 1, 0] });
  equal(fn(), 1);
});

test("if false", () => {
  const fn = compile({ if: [false, 1, 0] });
  equal(fn(), 0);
});

test("max", () => {
  const fn = compile({ max: [0, 2, 1] });
  equal(fn(), 2);
});

test("min", () => {
  const fn = compile({ min: [-1, 2, 1] });
  equal(fn(), -1);
});

test.run();
