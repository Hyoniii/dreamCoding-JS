//note!! shift,unshift are slower than pop,push
//splice: remove an item by index position
//concat: combine two arrays

//5.Searching

//indexOf: find the index
const fruits = ["🍎", "🍊", "🍑", "🍓"];
console.log(fruits.indexOf("🍎")); //0
console.log(fruits.indexOf("🥨")); //-1

//includes: boolean
console.log(fruits.includes("🍊")); //true
console.log(fruits.includes("🥐")); //false

//lastIndexOf
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎")); //0
console.log(fruits.lastIndexOf("🍎")); //4

//👉🏽문제
// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  /* 답 */
  console.clear();
  const result = fruits.join();
  //괄호에는 구분자가 들어간다. 생략하면 콤마
  console.log(result);

  let a = "";
  for (let i = 0; i < fruits.length; i++) {
    a = a + fruits[i];
  }
  console.log(a);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  let a = fruits.split(",");
  console.log(typeof a);
  console.log(a);
}

//b = [];
//fruits;
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const backArr = array.reverse();
  console.log(backArr);
  //reverse를 쓰면 array자체의 순서도 바뀐다.
  //배열 자체의 순서도 바꾸고 리턴값도 바뀐 순서로 리턴한다.
  console.log(array);
}

// 💥slice vs splice 차이점 알아두기!!!!💥
//Q4. make new array without the first two elements
{
  console.clear();

  const array = [1, 2, 3, 4, 5];
  //const arry2 = array.splice(0, 2);
  //console.log(arry2);
  //console.log(array);
  //기존의 배열도 바뀐다. 그래서 오답이다.

  /*답*/
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

//console.log(students);
// Q5. find a student with the score 90
{
  //답
  //find()이용
  const result = students.find((student, index) => student.score === 90);
  console.log(result);

  students.filter(function (a) {
    if (a["score"] >= 90) {
      console.log(a);
    }
  });
}

// 💥다시보기!!!💥
// Q6. make an array of enrolled students
{
  /*let studentName = [];
  students.forEach(function (a) {
    studentName.push(a["name"]);
  });
  console.log(studentName);*/

  const result = students.filter(function (a) {
    if (a["enrolled"] === true) {
      console.log(a);
    }
  });

  //정답
  const result2 = students.filter((student) => student.enrolled);
  console.log(result2);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  let studentScore = [];
  students.forEach(function (a) {
    studentScore.push(a["score"]);
  });
  console.log(studentScore);

  //정답
  console.clear();
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  students.filter(function (a) {
    if (a["score"] < 50) {
      console.log(a);
    }
  });

  //정답
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  let studentScore = [];
  students.forEach(function (a) {
    studentScore.push(a["score"]);
  });
  let a = 0;
  for (let i = 0; i < studentScore.length; i++) {
    let b = studentScore[i];
    a = a + b;
  }
  console.log(a);

  //정답
  const result = students.reduce((prev, curr) => {
    console.log("---------------");
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let studentScore = [];
  students.forEach(function (a) {
    studentScore.push(a["score"]);
  });
  const c = studentScore.join();
  console.log(c);
  console.log(typeof c);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
