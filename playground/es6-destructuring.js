let user = {
  name: "ken",
  age: 23,
  height: 1.7,
  address: "lorem ipsum"
};

// es6 way
let { name, age, height, address } = user;

console.log(name, age, height, address);

// es5 way
let name2 = user.name,
  age2 = user.age,
  height2 = user.height,
  address2 = user.address;

console.log(name2, age2, height2, address2);
