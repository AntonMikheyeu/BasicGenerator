function* generator1 (start, interval, count) {
  for(let i = 0; i < count; i++ ) {
    yield start + (interval * i);
  };
};

for(const value of generator1(0, 10, 25)) {
  console.log(value);
}
