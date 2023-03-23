let origDogs = ["Bulldog","Beagle","Labrador"];
let cats = new Array("America Curl","Bengal");
let birds = new Array("Falcons","Ducks","Flamingoes");

//Array Copy Elements
let sliceDogs = origDogs.slice(1,2);
let CopyDogs =[origDogs];
let dogs = origDogs.slice(0);

//Stack Functions (LIFO) Push and Pop
let PushDog = dogs.push("Golden Retriever");
let popDog = dogs.pop();
dogs[dogs.length] = "Poodle";

//Add and Remove from First
let addFirst = dogs.unshift("Golden Retriever");
let shiftDog = dogs.shift();

//Atomic add and remove elements [where,how many to remove, elements list]
dogs.splice(2,1,"pug","Boxer");

//Array Functions - Concat,Slice and Sort
let animals = dogs.concat(cats,birds);
let newanimals = [ dogs,cats,birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first,second]){console.log("Scan:"+first+" "+shiftDog);}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals =" ";
for(let animal of animals) allAnimals +=animal + " ";
console.log("Animals:"+allAnimals);