var nameVar = 'Andres';
var nameVar = 'Luna';
console.log('nameVar', nameVar);

let nameLet = 'Julie';
nameLet = 'Marie'; // You can reassign it, but can't duplicate it. 
console.log('nameLet', nameLet);

const nameConst = 'Preto';
// nameConst = 'Mattieh'; // u cant reassign Const
console.log('nameConst', nameConst);

// Block Scoping

const fullName = 'Jen Haayen';
const firstName;
if(fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);