const fibonacci = num => {
  let fibTwoBack = 0;
  let fibOneBack = 1;
  let fibNumber = 0;

  if(num < 0) {
    console.log('The number needs to be positive');
    return null;
  }
  if(num === 0) {
    console.log(fibTwoBack);
    return fibTwoBack;
  }
  if(num === 1) {
    console.log(fibOneBack);
    return fibOneBack;
  }

  for(let i = 2; i <= num; i++) {
    fibNumber = fibOneBack + fibTwoBack;
    fibTwoBack = fibOneBack;
    fibOneBack = fibNumber;
    // console.log(fibNumber);
  }
  console.log(fibNumber);
  return fibNumber;
}

fibonacci(-1);
fibonacci(1);
fibonacci(0);
fibonacci(22);
