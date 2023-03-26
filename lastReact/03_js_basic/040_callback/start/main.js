function print(callback) {
  // console.log(callback);
  const result = callback();
  console.log(result);
}

function fn(number) {
  return number * 2;
}

print(fn);
