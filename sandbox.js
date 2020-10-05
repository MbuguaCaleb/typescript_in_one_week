var character = 'caleb';
var age = 30;
var isBlackBelt = false;
//character = 20;
character = 'Mbugua';
//age = 'twenty';
age = 20;
//isBlackBelt = 'Yes';
isBlackBelt = true;
//we can define the type of paraemeter which a function takes
//when using typeScript
//function circ(diameter) {}
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(4));
