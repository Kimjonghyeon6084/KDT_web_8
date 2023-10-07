// 자바스크립트 경우
// function jsPrint(a, b) {
//   console.log(a);
//   console.log(b);
// }
// TS: 선언된 매개변수의 개수와 함수 호출시 전달되는 파라미터의 개수가 동일해야함
// jsPrint(1, 2, 3);

function print(a: number, b: number, c?: number) {
  console.log(a);
  console.log(b);
  console.log(c);
}

print(1, 2, 3);
print(1, 2);

function print2(a: number, b: number, c = 5) {
  console.log('--------print2--------');
  console.log(a);
  console.log(b);
  console.log(c);
}

print2(1, 2);
print2(1, 2, 3);

// void 말고 다른 리턴 타입
function concatStr(a: string, b: string): string {
  return a + b;
}

// 함수 표현식
const squareArea = (a: number, b: number): number => {
  return a * b;
};

const squareArea2 = (a: number, b: number) => a * b;

// 함수 호출하기
console.log('문자열 더하기 ' + concatStr('hi ', 'str'));
console.log('사각형 넓이 : ', squareArea(3, 4));
console.log(`사각형 넓이 :  ${squareArea(3, 4)}`);

// never 타입
// never X : 특정 조건에서만 빠져나갈 수 있고, 어떤 조건에서는 무한루프
// never: 항상 함수 끝에 도달하지 않는 경우
function goingOn(a: number): never {
  while (true) {
    console.log('go');
    // if (a > 10) break; // error
  }
}

//interface 선언 시 함수의 타입 지정
interface Greet {
  name : string;
  hi(): string;
  bye(a: number): string;
}

const jonghyun: Greet = {
  name: 'jonghyun',
  hi() {
    return 'hi my name is ' + this.name
  },
  bye(a:number){
    return `작별 인사를 ${a}번 했다.`
  }
}

console.log(jonghyun.hi());
console.log(jonghyun.bye(3));

//----------------------------------------------------

//함수 오버로딩
//만들 함수 : 숫자가 오면 더하고, 문자가 오면 이어주는 함수
// function addSomething(a: string | number,b : string | number): string | number {
//   return a + b;//error : 문자 + 숫자인 경우가 올 수 있기 때문에
// }

//오버로딩 : 함수의 매개변수의 개수, 타입/반환 타입이 다를 때 같은 이름으로 매개변수의 종류와 개수를 다르게 선언

function add(a: string, b: string): string;
function add(a:number, b:number): number;
function add(a: any, b: any) {
  return a + b
}

(1 + 2)
console.log(add('hello', 'world'));
console.log(add('1 ', '2'));

//사전에 타입 지정해서 에러 방지, 호출 x
