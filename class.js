"use strict";
// Object-oriendted programing
// class : template (주형,파일의 형식)
// object : instance of a class(클래스의 예시)
//클래스는 템플릿이다. 그 템플릿을 이용해서  실제로 데이터를 넣어서 만드는 것이 오브젝트.
//클래스를 이용해서 새로운 인스컨스를 생성하면 오브젝트가 된다.
// JavaScript classes
//  -introduced in ES6
//  -syntactical sugar over prototype-based inheritancd
//자바스크립트는 클래스가 도입된지 얼마 안됐다.(ES6)
//프로토타입 기반 위에 추가된 것. 문법적으로 달달한, 편리한

// 1.Class declaration
class Person {
  //constructor(생성자)
  constructor(name, age) {
    //오브젝트 만들때 필요한 데이터전달
    //fields
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}:hello!`);
  }
}
//this 는 생성된 오브젝트를 가르킨다.

const hyoniii = new Person("hyoniii", 27);
console.log(hyoniii.name);
console.log(hyoniii.age);
hyoniii.speak();

//2. Getter and Setters
//(https://velog.io/@bigbrothershin/JavaScript-%EC%A0%91%EA%B7%BC%EC%9E%90-%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0-getter-setter)

//getter 메서드는 User.age를 사용해 프로퍼티를 읽으려고 할 때 실행됩니다.
//setter 메서드는 User.age = value으로 프로퍼티에 값을 할당하려 할 때 실행됩니다.
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    //값을 리턴
    return this._age;
  }

  set age(value) {
    //값을 설정
    //if(value<0){
    //throw error('age can not be negative')
    //}
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

//확장해서 쓰면 수정도 편리하다. 한 곳에서만 하면 되니까.
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    console.log("🔺"); //이것만 있으면 오버라이딩 돼서 위에서 정의한 내용은 나오지 않는다
    super.draw(); //부모 메소드 호출하는 super
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
} //dl렇게 필요한 함수만 재정의 가능하다. 이것을 오버라이딩이라고 한다.

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
const triangle = new Triangle(20, 20, "red");
triangle.draw();

console.log(rectangle.getArea());
console.log(triangle.getArea());

// 4.Class checking: intanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

//왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 인스턴스인지 아닌지
