function* generator1() {
  yield "Hello";
  yield "World";
  return "My name is Anton";
}

const generator1Instance = generator1();

let finished = false;

while(!finished) {
  const { value, done } = generator1Instance.next();
  console.log(value);
  finished = done;
}
