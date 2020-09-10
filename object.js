//Object
//one of the JavaScript's data types
//a collection of related data and/or functionality
//Nearly all objects in JavaScript are instances of Object
//object = {key:value}

//1.Literals and properties

//오브젝트를 만드는 두가지 방법
const obj1 = {}; //object literal
const obj2 = new Object(); //class 이용, object constructor

const name = "hyoniii";
const age = 27;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}

const hyoniii = { name: "hyunhee", age: 26 };
//JS에서는 클래스 없이 괄호 이용해서 바로 오브젝트 생성 가능
function print2(person) {
  console.log(person.name);
  console.log(person.age);
}
print2(hyoniii);

//JS는 런타임때 동적으로 타입이 결정되기 때문에 이렇게 추가도 가능
hyoniii.hasJob = false;
console.log(hyoniii);
//이런 경우는 유지,보수가 힘들기에 자제해야함

delete hyoniii.hasJob;
console.log(hyoniii);

//2.Computed properties
//key should be always srting
console.log(hyoniii.name);
console.log(hyoniii["name"]);
hyoniii["hasJob"] = false;
console.log(hyoniii.hasJob);
//닷은 코딩하는 그 순간 그 키에 해당하는 값을 받아오고 싶을때
//컴포짇은 정확하게 어떤 키가 필요한지 모를때 즉 런타임에서 결정될때
//평소 코딩할 때는 닷을 쓰는게 맞다.
/* ⭐️
👉🏽 Question : 오늘도 좋은 강의 너무 감사드립니다 !!! 역시 선생님 강의를 들으면 새로운것들을 많이 알아가는것 같습니다. 

좋은 강의 이해를 하면 좋겠는데 제가 부족해서 한가지 의문이 생겼네요 ㅎㅎㅎ 

const ellie = { name: "ellie", age: 4 };

function printValue(obj, key) {
  console.log(obj.key); //undefined , undefined
  console.log(obj[key]); // ellie , 4
}

printValue(ellie, "name");
printValue(ellie, "age");


에서 (.)을 사용한 결과가 undefined가 나오는 이유가, 저는 key값이 string으로 전달되어서 ellie."name" , ellie."age" 이기 때문에 문제가 되는줄 알았는데, 그 문제가 아니라 선생님 말씀처럼 정확한 전달받는 key가 정확하게 어떤것인지 모르기 때문에 이런문제가 발생하는거였나요?

👉🏽 Answer : 
object.key 
이것은 object에 key라는 값이 없어서 그래요 :) 
object.name 있으니깐 그 값은 ellie가 출력
object.age 있으니깐 그 값은 4가 출력
object.key 라는건 없으니깐 undefined
만약
const ellie = { name: "ellie", age: 4, key: "정요섭님"};
이렇게 했으면 object.key는 정요섭님이 나왔을꺼예요 :) 
한번더 설명하고 넘어 갈 걸 그랬어요 🙌 질문 주셔서 감사합니다 */

//3.Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("hyoni", 27);
console.log(person4);

function makePerson(name, age) {
  return {
    name, //name:name
    age, //age:age
  };
}

// 4.Constructor Function
//위 함수는 클래스 같은 역할이다. 다른 계산을 하지 않고 순수하게 오브젝트를 생성하는 함수는 대문자로 시작.👇🏾수정
function Person(name, age) {
  //this = {} //새로운 오브젝트 만들어서 this에
  this.name = name; //클래스에서 생성자 만들듯이,this에 프로퍼티 넣는다.
  this.age = age;
  //return this  //프로퍼티가 들어간 this를 리턴
}
const person5 = new Person("hyon", 26);
//호출도 클래스에서 오브젝트 만들듯이

//5.in operator: property existence check(key in obj)
console.log("name" in hyoniii);
console.log("random" in hyoniii);

//6. for ..in vs for..of
//for (key in obj)
for (key in hyoniii) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

//7.Fun cloning
//Object.assign(dest,[obj1,obj2,obj3,...])
const user = { name: "hello", age: "5" };
const user2 = user;
//user.name = "coder";
console.log(user); //레퍼런스가 복사돼서 동일한 레퍼런스를 가지고 있기 때문에 user2를 변경하면 user도 함께 변경됨

//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
user3.name = "coder";
console.log(user3);

//new awy
//Js의 모든 오브젝트는 Object를 상속한다
const user4 = {};
Object.assign(user4, user); //(target, source)
console.log(user4);

//const user4 = Object.assign({}, user); 위와 동일한 결과
/