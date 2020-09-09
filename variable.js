//1.Use strict
//added in ES 5
//use this for Vanila Javascript
"use strict";

//2.Variable(변수), rw(read,wtite)
//let (added in ES6)
//mutable

//block scope
{
  let name = "hyunhee";
  console.log(name);
  name = "hello";
  console.log(name);
}

console.log(name);

// var
// 선언 전에 값을 할당 가능 할당 전에 출력도 가능
// var hoistiong (move declaraition from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

//3.Constant, r(read only)
//use const whenever possible.
//only use let if variable needs to change.

const daysInWeek = 7;

//Note!!
//Immutable data types: primitive types, frozen object(i.e object.freeze())
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a reasons:
// - security
// - thread safety
// - reduce human mistakes

//4.Varialble types
//primitive,single item:number,string,boolean,null,undefined,symbol
//object,box container
//function,first-class function
// ? first-class function을 지원한다는 말은 해당 프로그래밍 언어에서는 function도 다른 데이터 타입처럼 변수에 할당이 가능하고 또 그렇기 떄문에 함수에  parameter(인자)로 전달이 되고 함수에서 return타입으로도 function을 리턴하는 것이 가능하다는 뜻 ?

//5.Dynamic typing: dynamically typed languege
// 선언할때 어떤 타입인지 정하지 않고 런타임, 프로그래밍이 동작할때  할당된 값에 따라서 할당된 값이 변경될 수 있다는 뜻
let text = "hello";
console.log(`value:${text},type:${typeof text}`);
text = 1;
console.log(`value:${text},type:${typeof text}`);
text = "7" + 5; //5가 스트링으로 변해서 75가 된다.
console.log(`value:${text},type:${typeof text}`);
text = "8" / "2"; //나누기는 또 숫자로 변한다.
console.log(`value:${text},type:${typeof text}`);

//이처럼 자바스크립트는 런타임 중에 타입이 변하는 경우가 많기 때문에 조심해야한다. 그래서 타입스크립트가 나오게 됨.
