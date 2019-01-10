var eatsPlants = false;
var eatsAnimals = true;
var category = eatsAnimals? (eatsPlants? "omnivore":"carnivore"):(eatsPlants? "herbivore":undefined);
console.log(category);