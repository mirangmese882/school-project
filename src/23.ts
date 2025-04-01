// Project name: SchoolProject
// File name: Calculator.ts

function addNumbers(a: number, b: number): number {
    return a + b;
}

function subtractNumbers(a: number, b: number): number {
    return a - b;
}

function multiplyNumbers(a: number, b: number): number {
    return a * b;
}

function divideNumbers(a: number, b: number): number | null {
    if (b === 0) {
        return null;
    }
    return a / b;
}
