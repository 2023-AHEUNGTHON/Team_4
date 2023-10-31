// const name = "name이라는 이름의 상수를 선언해볼게요"
// const name = "한번 더 선언해 볼게요"
// Uncaught SyntaxError : Identifier 'name' has already been declared
// const를 사용한 특정한 이름의 상수 선언은 한번만 사용할 수 있음

// const pi
// Uncaught SyntaxError : Missing initializer in const declaration
// 상수는 한번만 선언할 수 있으므로 선언할 때 반드시 그 값을 함께 지정해줘야 함.

// const name = "name이라는 이름의 상수를 선언해볼게요."
// name = "그 값을 변경해볼게요."
// TypeError : Assignment to constant variable
// 이 경우에는 const가 아닌 var(변수)를 이용하여 선언해야 함

// var은 값 재할당 가능, 재선언 가능
// let은 값 재할당 가능, 재선언 불가
// const는 값 재할당 불가, 재선언 불가