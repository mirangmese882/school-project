export declare function findMax(numbers: number[]): number {
  let max = numbers[0];
  if (numbers.length > 1) {
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  }
  return max;
}
