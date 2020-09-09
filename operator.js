//1.String concatenation
console.log("my" + "cat");
console.log("1" + 2); //2가 문자열로 변환돼서 12가 나온다.
console.log(`string literals:1+2=${1 + 2}`);

//2.Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(1 % 1);
console.log(1 ** 1);

//3.Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter 와 동일한 코드
console.log(counter);

let counter2 = 2;
const postIncrement = counter2++;
// preIncrement = counter
// counter = counter + 1 와 동일한 코드
console.log(postIncrement);

// 4.Assigment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//6.Logical operators: ||(or), &&(and),!(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or) 하나만 트루여도 트루 반환
console.log(`or:${value1 || value2 || check()}`);
//심플한걸 맨 앞으로
function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("🤎");
  }
  return true;
}

console.log(`and:${value1 && value2 && check()}`);

//7.Equality
const stringFive = "5";
const numberFive = 5;

//== loose equality,with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//9.Ternary operator: ?
// condition ? value1 : value2
const name = "what";
console.log(name === "what" ? "yes" : "no");
