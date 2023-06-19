/**
 * Let's make a calculator 🧮
 */

// 내가 푼 방식
// function calculate(x: string, y: number, z: number): number | undefined {
//     let result = 0;

//     if (x === "add") {
//         return (result = y + z);
//     }
//     if (x === "substract") {
//         return (result = y - z);
//     }
//     if (x === "multiply") {
//         return (result = y * z);
//     }
//     if (x === "divide") {
//         return (result = y / z);
//     }
//     if (x === "remainder") {
//         return (result = y % z);
//     }
//     return result as number;
// }
//
// console.log(calculate("add", 1, 3)); // 4
// console.log(calculate("substract", 3, 1)); // 2
// console.log(calculate("multiply", 4, 2)); // 8
// console.log(calculate("divide", 4, 2)); // 2
// console.log(calculate("remainder", 5, 2)); // 1

// 고칠점.
// 1. 함수 이름 명확히 짓기
// 2. Type Assertion 사용해서 타입을 강요하는건 좋지 않음.
// 3. 만약 return 값이 undefined 일 경우 Error 반환하는것이 더 가독성이 좋음

type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(command: Command, a: number, b: number): number {
    switch (command) {
        case "add":
            return a + b;
        case "substract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        case "remainder":
            return a % b;
        default:
            throw new Error("unknown command!");
    }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
