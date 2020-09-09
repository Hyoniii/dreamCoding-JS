"use strict";
// Object-oriendted programing
// class : template
// object : instance of a class
//클래스는 템플릿이다. 그 템플릿을 이용해서  실제로 데이터를 넣어서 만드는 것이 오브젝트.
// JavaScript classes
//  -introduced in ES6
//  -syntactical sugar over prototype-based inheritancd
//자바스크립트는 클래스가 도입된지 얼마 안됐다.(ES6)
//프로토타입 기반 위에 추가된 것. 문법적으로 달달한, 편리한

// 1.Class declaration
class Person {
  //constructor(생성자)
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}:hello!`);
  }
}

const hyoniii = new Person("hyoniii", 27);
console.log(hyoniii.name);
console.log(hyoniii.age);
hyoniii.speak();
//this 는 생성된 오브젝트를 가르킨다.

//2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
