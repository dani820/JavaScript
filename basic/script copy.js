
// // const : 상수. 변하지 않는 수. 기본적으로 많이 사용한다.
// // let : 변할 수 있는 수
// // var : 원하면 언제든 변할 수 있기 때문에 값이 변경되어 출력 (규칙 X)
// //       값을 보호하고 실수를 막기 위해서 const, let 을 나누어 각각 사용되는 것
// //       (사용 권장하지 않음)
// //       ******* 변수 종류만 보고도 의도를 파악할 수 있다. *******

// const a = 5;
// const b = 2;

// // 변수에 따른 값 확인 (최하단 콘솔 값 확인)
// // 1. 변수 const 일 때
// let myName = "nico";

// // 2. 변수 let 일 때
// // let myName = "nico";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("Hello " + myName);

// // Check Point!
// // 0. 위에서부터 순서대로 출력되기 때문에 기본적으로 Hello nico 출력되고
// // 아래 값은 위에서 설정한 변수 형태에 따라 다르게 출력된다.

// myName = "nicolas";

// console.log("your new name is " + myName);

// // 1. 변수 const 일 때
// // 변하지 않는 상수 형태이므로 값 출력되지 않고 에러 발생

// // 2. 변수 let 일 때
// // 변할 수 있는 값의 형태이기 때문에 변경 가능

// // 3. 변수 var 일 때
// // 원하면 언제든 변할 수 있기 때문에 let 처럼 값이 변경되어 출력 (규칙 X)


// const amIFat = null;
// let something;
// console.log(something, amIFat);

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"]

// const nonsense = [1, 2, 3, "hello", null, true, false, "nico"]

// // Get Item from Array
// console.log(daysOfWeek);

// // Add one more day to the Array
// daysOfWeek.push("sun");
// console.log(daysOfWeek);

// const playerName = "nico";
// const playerPoints = 121212;
// const playerHansome = false;
// const playerFat = "little bit";

// // Object
// // 내부에서 property 생성 ex) name, points, fat
// const player =  {
//     name: "nico",
//     points: 10,
//     fat: true,
// };

// console.log(player);

// // 같은 결과 출력
// console.log(player.name);
// console.log(player["name"]);

// // 객체 안에 데이터 변경 시에는 문제 없음
// // player 라는 객체 자체의 값을 변경하는 것은 불가 -> const 변수(상수)이기 떄문
// player.fat = false;

// // 이런식으로만 작성하더라도 객체에 값을 추가할 수 있다.
// player.lastName = "potato";
// player.points = player.points + 15;

// console.log(player.points);


// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }


// console.log("hello");
// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("flynn", 21);


// function plus(firstNumber, secondNumber) {
//     // console.log(a + b);
//     // a,b 값 없을 경우 결과값 NaN : Not A Number

//     console.log(firstNumber + secondNumber);
// }
// // console.log(firstNumber);
// function divide(a, b) {
//     console.log(a / b);
// }

// plus(8, 60);
// divide(98, 20);

// // function
// // 어떤 코드를 캡슐화해서 재사용할 수 있도록 만든 것
// // 특정 input 을 기반으로 같은 행동 실행
// const player1 = {
//     name: "nico",
//     sayHello: function(otherPersonsName) {
//         console.log("hello " + otherPersonsName + " nice to meet you!");
//     }
// };

// console.log(player1.name);
// player1.sayHello("lynn");
// player1.sayHello("nico");


// const days = ["mon", "tue", "wed"]
// const player2 = {
//     name: "Nico",
//     age: 98,

// };
// console.log(player2);
// player2.name = "nicolas";
// console.log(player2);
// player2.sexy = "soon";
// console.log(player2);

// function minusFive(potato) {
//     console.log(potato - 5);
// }

// // minusFive(5, 10, 12, 34, 4, 5, 6, 7);
// // 받을 수 있는 argument 가 하나라면 함수에서 첫 번째 하나의 값만 넘어간다.



// // sample 1.
// // 1+1 1-1 a+b a-b a/b a**b(a의 b 제곱)

// const calculator = {
//     plus: function(a,b) {
//         console.log("hello");
//         return a+b;
//         // console.log("bye bye");
//         // return 이후의 코드는 실행되지 않음
//     },
//     minus: function(a,b) {
//         return a-b;
//     },
//     times: function(a,b) {
//         return a*b;
//     },
//     divide: function(a,b) {
//         return a/b;
//     },
//     powerOf: function(a,b) {
//         return a**b;
//     }
// };


// // calculator.add(4,2);
// // calculator.minus(4,2);
// // calculator.times(4,2);
// // calculator.divide(4,2);
// // calculator.powerOf(4,2);

// // console.log(calculator.plus(2,3));

// const plusResult = calculator.plus(2,3);
// const minusResult = calculator.minus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divdeResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.powerOf(divdeResult, minusResult);
// // console.log(plusResult);

// // const age = 96;
// // function calculateKrAge(ageOfForeigner) {
// //     ageOfForeigner + 2;
// //     return "hello";
// // }

// // const krAge = calculateKrAge(age);

// // console.log(krAge);

// // prompt 안 쓰는 이유
// // css 적용 불가 : 메세지 창, 버튼 등
// // 브라우저로 할 수 있는 가장 직접적인 방법인데, 어떤 브라우저는 팝업을 제한하기도 함
// const age = parseInt(prompt("How old are you?"));
// // console.log(isNaN(age));

// true || true === true
// false || true === true
// true || false === true
// false || false === false

// if(isNaN(age) || age < 0) {
//     console.log("Please write a real positive number");
// }else if(age < 18) {
//     console.log("You are too young");
// }else if(age >= 18 && age <= 50) {
//     console.log("You can drink");
// }else if(age > 50 && age <= 80) {
//     console.log("You should exercise");
// }else if(age > 80) {
//     console.log("You can do whatever you want.");
// // 현 상태에서는 age 가 100 이어도 아래 조건은 실행되지 않음. why?
// // 이미 바로 위 80 초과 조건식을 만족하기 때문에 위에 해당되는 문자열이 출력된다.
// // point! if 문은 위에서부터 차례대로 탐색하기 때문에 **작성 순서**에 유의해야 한다.
// }else if(age === 100) {
//     console.log("wow you are wise");
// }

// // typeof : variable 의 type 을 보는 방법
// // 기본 자료형은 string

// // 형변환
// // console.log(age, parseInt(age));

// const title = document.getElementById("title");


// console.dir(title);
// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

// 클래스의 하위 폼을 가져올 수는 없음
// 클래스 자체 값만 가져올 수 있다
// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// hello 클래스 하위 값을 가져오고 싶을 때 사용 가능
// const title = document.querySelector(".hello h1");

// console.log(title);

const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(title);

// title.innerText = "hello";



// function handlelTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor; // 빈 변수 선언

//     // === 값이 일치함을 확인하기 위한 것
//     // 현 상태에 따라 할당할 초기 값 지정됨
//     if (currentColor === "blue") {        
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     // if 문에 결과에 따라 실질적으로 값을 할당하는 부분
//     // 이 코드가 있어야 색이 바뀐다.
//     // h1.style.color = newColor;
// }

function handlelTitleClick() {
    // const clickedClass = "clicked";
    // className 을 사용해서 변경할 수도 있지만,
    // 기존에 이미 className 이 지정되어 있는 경우라면
    // 아예 새로운 이름으로 덮어씌워지면서 기존 설정을 잃어버릴 수 있기 때문에 classList 를 사용하기도 한다.

    // classList : class 내용물을 조작할 수 있다는 뜻으로, 괄호 안의 클래스를 포함하고 있다는 것을 뜻한다.
    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // }else {
    //     h1.classList.add(clickedClass);
    // }

    h1.classList.toggle("clicked");
}


// function handleMouseEnter() {
//     h1.innerText = "mouse is here";
// }

// function handleMouseLeave() {
//     h1.innerText = "Mouse is gone";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier");
// }

// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//     alert("All Good");
// }
// title.addEventListener("click", handlelTitleClick);
h1.addEventListener("click", handlelTitleClick);
// h1.addEventListener("mouseenter" ,handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);