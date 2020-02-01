function* generator1() {
  yield "Hello";
  yield "World";
  yield "My name is Anton";
}

const generator1Instance = generator1();

for(const value of generator1Instance) {
  console.log(value);
}
