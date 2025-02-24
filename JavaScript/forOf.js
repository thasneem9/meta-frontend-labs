// Task 1

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (var i of dairy) {
          console.log(i)
    }
  
}
logDairy();
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
function birdCan() {
    for(var key of Object.keys(bird)){
   console.log(`${key}: ${bird[key]}`);

    }
}
birdCan();
function animalCan() {
    for (var prop in bird) {
        console.log(`${prop}: ${bird[prop]}`); // Proper logging    
    }
    
}
animalCan();
// Task 2

// Task 3

