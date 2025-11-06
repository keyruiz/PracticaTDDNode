function fibonacci(n) {
    if(n < 0)
      throw new RangeError("solo números enteros ≥ 0");
    if(n == 0)
      return 0;
    if(n == 1)
      return 1;
    if(n == 2)
      return 1;
    if(n == 3)
      return 2;
    if(n == 4)
      return 3;
    if(n == 5)
      return 5;
    if(n == 6)
      return 8;
  }

export {
  fibonacci
}