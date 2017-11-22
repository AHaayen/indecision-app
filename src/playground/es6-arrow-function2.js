// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(12, 2, 1000));

// (this) keyword - no longer bound


const user =  {
    name: 'Andres',
    cities: ['World', 'Earth', 'Aruba'],
    printPLacesLived() {  // ES6 method definition syntax
       return this.cities.map((city) => this.name + ' has lived in ' + city);
      
        // const that = this;
        // console.log(this.name);
        // console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(this.name + ' had lived in ' + city);
        });
    }
};

console.log(user.printPLacesLived());

const multiplier = {
    numbers: [2, 5, 6, 7],
    multiplyBy: 20,
    multiply() { 
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
