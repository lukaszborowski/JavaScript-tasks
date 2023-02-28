var Robot = function(name) {
  this.name = name;
  this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
  if(this.isFunctional === true){
    console.log("Robot " + this.name + " greets " + toWho);
  }
  else{
    console.log("Robot " + this.name + "is broken");
  }
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + "changes name to " + newname);
  this.name = newname;
};

Robot.prototype.fixIt = function() {
  this.isFunctional = true;
  console.log("Robot " + this.name + "was fixed");
};

var robot1 = new Robot("T-1000");
robot1.sayHi("Agata");
robot1.changeName("T-1000-1");
robot1.fixIt();
console.log(robot1);

var robot2 = new Robot("T-2000");
console.log(robot2);
robot2.sayHi("Agata");
robot2.changeName("T-2000-1");
robot2.fixIt();
console.log(robot2);

