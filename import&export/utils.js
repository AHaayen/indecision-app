console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;
export const divide = (a, b) => a / b;

// this works because you can name default with whichever name you want.
export default (a, b) => a - b;


// u can have 1 default, not more then 1
// export {square, add, minus as default, divide};

// exports - default export - named exports