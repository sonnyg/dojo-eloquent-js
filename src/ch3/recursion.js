function isEven(val) {
  if (val == 0) {
    return true;
  } else if (val == 1 || val == -1) {
    return false;
  } else {
    if (val < 0) {
      return isEven(val + 2);
    } else {
      return isEven(val - 2);
    }
  }
}

console.log(`isEven(50) = ${isEven(50)}`);
console.log(`isEven(75) = ${isEven(75)}`);
console.log(`isEven(-1) = ${isEven(-1)}`);
console.log(`isEven(-50) = ${isEven(-50)}`);
console.log(`isEven(-75) = ${isEven(-75)}`);
