function min(val1, val2) {
  if (val1 < val2) {
    return val1;
  } else {
    return val2;
  }
}

console.log(`min(3, 5) = ${min(3,5)}`);
console.log(`min(6, 2) = ${min(6,2)}`);
console.log(`min(5, 5) = ${min(5,5)}`);
console.log(`min(-1, 5) = ${min(-1,5)}`);
