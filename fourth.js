function* generator1(value) {
  try {
    const nextValue = yield value;
    const nextNextValue = yield nextValue;
    return nextNextValue;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

const generator1Instance = generator1("My "); // Create generator and set value to environment

console.log(generator1Instance.next().value); // Return value from first yield (row 2)

console.log(generator1Instance.next("Amsterdam").value); // Set value to yield (row 2) and return value from yield (row 3)

console.log(generator1Instance.throw(new Error("Error example")).value); // Set value to yield (row 3) and return value from return (last yield, catch block)
