function arrElement<T>(arr: T[], index: number): T | boolean {
  if (arr.length <= index) {
    return false;
  } else {
    return arr[index];
  }
};

console.log('practice5 : ', arrElement<string>(['a'], 1));
console.log('practice5 : ', arrElement<string>(['a,', 'b'], 1));