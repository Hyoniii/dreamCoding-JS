// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  let a = "";
  for (let i = 0; i < fruits.length; i++) {
    console.log((a = a + fruits[i]));
  }
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
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const arry2 = array.splice(2);
  console.log(arry2);
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

console.log(students);
// Q5. find a student with the score 90
{
  students.filter(function (a) {
    if (a["score"] >= 90) {
      console.log(a);
    }
  });
}

// Q6. make an array of enrolled students
{
  let studentName = [];
  students.forEach(function (a) {
    studentName.push(a["name"]);
  });
  console.log(studentName);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  let studentScore = [];
  students.forEach(function (a) {
    studentScore.push(a["score"]);
  });
  console.log(studentScore);
}

// Q8. check if there is a student with the score lower than 50
{
  students.filter(function (a) {
    if (a["score"] < 50) {
      console.log(a);
    }
  });
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
