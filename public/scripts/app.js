'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};

console.log(add(12, 2, 1000));

// (this) keyword - no longer bound


var user = {
    name: 'Andres',
    cities: ['World', 'Earth', 'Aruba'],
    printPLacesLived: function printPLacesLived() {
        var _this = this;

        // ES6 method definition syntax
        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        // const that = this;
        // console.log(this.name);
        // console.log(this.cities);

        this.cities.forEach(function (city) {
            console.log(_this.name + ' had lived in ' + city);
        });
    }
};

console.log(user.printPLacesLived());

var multiplier = {
    numbers: [2, 5, 6, 7],
    multiplyBy: 20,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
