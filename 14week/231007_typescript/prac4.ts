//...a : 나머지 매개변수, 남아있는 매개변수들을 한데 모아 배열 a에 집어넣겠다.
//항상 마지막에 넣어야 함
function sum2(...a: number[]): number {
  //function sum2(b: number, ...a:number[]) : {}
  let sum = 0;
  a.forEach((el) => (sum += el))
  return sum;
}

console.log(sum2(1,2,3,4,10))
