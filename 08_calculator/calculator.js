const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, number) => total + number, 0)
};

const multiply = function(array) {
  return array.reduce((total, number) => total * number);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if(n === 0) return 1;
  if(n === 1) return 1;
  
  let fArray = [];
  for (let i = n; i > 0; i--) {
    fArray.push(i);
  }

  return fArray.reduce((total, number) => total * number);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
