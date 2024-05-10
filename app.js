const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;

const minimumSpace = 0.8;//spacePerPlant
const startingPlants = 20;//initialPlants
const maxCapacity = area / minimumSpace;
const weekOne = 20;
const weekTwo = 20 * 2;
const weekThree = weekTwo * 2;

// PC = PlantCount
const eightyPercent = (PC) => PC > maxCapacity * minimumSpace;
const fifthyToEigthy = (PC) =>
  PC >= maxCapacity * 0.5 && PC <= maxCapacity * 0.8;
function plantGrowthControl(weeks){
    console.log();
    const plantCount = startingPlants * Math.pow(2, weeks);
    if (eightyPercent(plantCount)) {
        console.log(`Week ${weeks}: Prune the plants. Too many plants!`);
      } else if (fifthyToEigthy(plantCount)) {
        console.log(
          `Week ${weeks}: Monitor the plants. They are growing within acceptable limits.`
        );
      } else {
        console.log(`Week ${weeks}: Plant more. There is room for more plants.`);
      }
}

plantGrowthControl(1); // Simulate growth for 1 week
plantGrowthControl(2); // Simulate growth for 2 weeks
plantGrowthControl(3); // Simulate growth for 3 weeks


