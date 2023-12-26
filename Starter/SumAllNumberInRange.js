function sumAll(arr) {
    let sum = 0;
    let sort = arr.sort((a, b) => a - b);
    let max = sort[sort.length - 1];
    let min = sort[0];
  
    for(let i = min; i <= max; i++) {
      sum = sum + min;
      min = min + 1;
    }
  
    return sum;
}
  
sumAll([4, 1]);