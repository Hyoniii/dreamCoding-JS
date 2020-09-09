//Function
//  - fundamental building block in the program
//프로그램은 구성하는 기본적인 빌딩블록
//  - subprogram can be user multiple times
//여러번 재사용 가능
//  - performs a task or calculates a value
//한가지의 테스크나 값을 계산하기 위해 사용된다(대체로)

// 1. Function declaration
// function name(param1, param2){body... return;}
// one function === one thing
//하나의 함수는 한 가지의 일만 하도록 만들어야 한다.
// naming: doSomething, command, verb
//변수는 명사, 함수는 동사
// e.g createCardAndPoint -> createCard,createPoint
//좀 더 세분화해서 함수를 만들어야한다.
// function is object in JS
//자바스크립트에서 펑션은 오브젝트이다. 그래서 변수로 할당,파라미터로 전달, 함수를 리턴 모두 가능하게 된다.
function printHello() {
  console.log("hello");
}
printHello();

//위의 함수를 좀 더 유용하게 만들기 위해선 파라미터 이용
function log(message) {
  console.log(message);
}
log("hi!");

// 2. Parameters
// premitive parameters: passed by value
// object parameter: passed by reference
function changeName(obj) {
  obj.name = "corder";
}
const hyoniii = { name: "hyoniii" };
changeName(hyoniii);
console.log(hyoniii);

// 3.Default parameters (added in ES6)
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage("hi@!"); //fromdㅣ 없기 때문에 undefined 출력
//ES6 전에는 이렇게 코드가 길었다.
function showMessage(message, from) {
  if (from === undefined) {
    from = "unknown";
  }
  console.log(`${message} by ${from}`);
}
//ES6 이후엔 한줄 코드 가능해짐
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}

// 4. Rest parameters (added in ES6)
//배열 형태로 전달된다.
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  // 같은 결과
  for (const arg of args) {
    console.log(arg);
  }
  // 같은 결과
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "hyoniii");

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum:${sum(1, 2)}`);

//return 타입이 없는 함수는  return undefined이 있는거랑 똑같다.

// 7. Early return, early exit
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}

//good, 조건이 맞지 않는 경우는 얼른 리턴해서 함수를 종료하고 조건이 맞을 경우의 로직을 뒤에 써주는게 좀 더 효울적인 코드.
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic...
}

//First-class function
//functions are treated like any other yariable
//can be assigned as a value to variable
//can be passed as an argument to other functions
//can be returned by another function

//1.Function expression
//a finction declaration can be calles earlier than it is defined,(hoisted)
//a function expression is created when the execution reaches it. 함수를 할당 전에 호출하면 오류가 난다

const print = function () {
  //anonymous function
  console.log("print");
}; //function expression 함수 표현식
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2.callback function using function expression
function randomQuiz(answer, printYes, prinNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
//anonymous function
const printYes = function () {
  console.log("yes");
};
//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// IIFE : Immediately Invoked Function Expression
function hello() {
  console.log("IIFE");
}
hello();
// 위의 예시를 선언함과 동시에 호출하고 싶다면 아래처럼
(function hello() {
  console.log("IIFE");
})();

//예제
function caculator(command, a, b) {
  if (command === "add") {
    console.log(a + b);
  } else if (command === "substract") {
    console.log(a - b);
  } else if (command === "multiply") {
    console.log(a * b);
  }
}

caculator("add", 8, 2);
//switch를 쓰는게 더 좋다.
