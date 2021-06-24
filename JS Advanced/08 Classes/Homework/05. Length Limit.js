class Stringer {
    constructor(string, length) {
        this.string = string;
        this.length = length;
        this.innerString;
        this.innerLength;
    }

 // ??? length check

    increase(length) {

    }

    decrease(length) {

    }

    toString() {
        if (this.string.length > this.length) {
            return this.string.slice(-this.length) + '...'
        }

        return this.string
    }

}

let test = new Stringer("Test", 2);
console.log(test.toString()); // Test

// test.decrease(3);
// console.log(test.toString()); // Te...

// test.decrease(5);
// console.log(test.toString()); // ...

// test.increase(4);
// console.log(test.toString()); // Test