// This is a simple school project code.
// Example usage:

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(2, 3)); // Output: 5

function printMessage(message: string, numTimes: number = 10): void {
    for (let i = 0; i < numTimes; i++) {
        console.log(`This is message ${i + 1}`);
    }
}

printMessage("Hello, world!");
