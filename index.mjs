// IMPORT DEFAULT
import math from "./math.mjs";

// IMPORT ONE
import { add } from "./math.mjs";

let num1 = 10;
let num2 = 20;

const addition = add(num1, num2); //expected 30
console.log(`addition result: ${addition}`);

const diff = math.diffrecence(num1, num2); //expected 10
console.log(`difference result: ${diff}`);
