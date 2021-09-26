import { addOperation } from "json-logic-js-jit";

addOperation("var", (key, data) => data[key]);
addOperation("if", (cond, iftrue, iffalse) => (cond ? iftrue : iffalse));
addOperation("max", (...args) => (args.pop(), Math.max(...args)));
addOperation("min", (...args) => (args.pop(), Math.min(...args)));
addOperation("log", (...args) => console.log(...args));
