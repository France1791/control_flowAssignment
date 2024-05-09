const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;

let minimumSpace = 0.8;
let startingPlants = 20;
const weekOne = 20;
const weekTwo = 20 * 2;
const weekThree = weekTwo * 2;

let plantCount 
if(plantCount > 0.8 * area){
    console.log("Pruned");
}else if(plantCount > 0.5 * area && 0.8 * area){
    console.log("Monitored");
}else if(plantcount < 0.5 * area){
    console.log("Planted");
};