var Human = /** @class */ (function () {
    function Human() {
        this.name = "MUTLU";
    }
    Human.prototype.speak = function () {
        console.log('Hello world. My name is ' + this.name);
    };
    return Human;
}());
var h = new Human();
// h.speak();
// var func = h.speak();
// var func2 = h.speak;
h["speak"]();
var controllers = {};
controllers["test"] = new Human();
controllers["test"].speak();
controllers["test"]["speak"]();
var age = 14;
var secondName = 'Nteli Chasan Moustafa';
var firstName = 'Tacha';
console.log("Hello World. My name is ".concat(firstName, " and Im ").concat(age, " yo."));
