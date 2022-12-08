class Foo{}
const calculatorMixin = (Base) => class extends Base {
  calc() { }
};
const randomizerMixin = (Base) => class extends Base {
  randomize() { }
};
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
class User {
  builder(name) {
    this.name = name;
    this.color = 'brown';
    this.gender = 'male';
  }
 setName(name) {
  this.name = name;
    return this;
  }
  setColor(color) {
    this.color = color;
  	return this;
  }
  setGender(gender) {
  	this.gender = gender;
  	return this;
  }
    static hello(x) {return "Hello " + x.name; }
  display() {
    document.write(
      'saving ' + this.name + ', the ' +
      this.color + ' ' + this.gender + ' classObj'
    );
  }
  con() {
    console.log(
      'saving ' + this.name + ', the ' +
      this.color + ' ' + this.gender + ' kitten...'
    );
    // save to database here...
    // localStorage.setItem();
    return this;
  }
}
// btn.onclick('let x=new User(name, last)');