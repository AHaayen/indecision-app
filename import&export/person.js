// export const isAdult = (age) => {
//     if(age >= 18){
//         return true;
//     }
//     return false
// }

// export const canDrink = (age) => {
//     if(age >= 21){
//         return true;
//     }
//     return false
// }

// ---------------------------------

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;
const isSenior = (age) => age >= 65;

export {isAdult, canDrink, isSenior as default};
