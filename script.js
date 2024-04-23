//Assignment Breakdown
//Code to calculate and log the following information for each speed (55, 60, and 75 mph):
    //Gallons of fuel needed for the entire trip
    //Total cost of fuel for the trip
    //Whether the budget is enough to cover the fuel expense
    // Time taken for the trip

    
// Define constants for the trip details
const totalDistance = 1500; // Total distance of the trip in miles
const fuelBudget = 175; // Budget for fuel expenses in dollars
const costPerGallon = 3; // Average cost of fuel per gallon in dollars
const fuelEfficiency = { // Fuel efficiency at different speeds
    55: 30, // Miles per gallon at 55 mph
    60: 28, // Miles per gallon at 60 mph
    75: 23  // Miles per gallon at 75 mph
};

// Calculate the number of gallons needed for the entire trip at different speeds
const gallonsNeeded = {};
for (const speed in fuelEfficiency) {
    gallonsNeeded[speed] = totalDistance / fuelEfficiency[speed];
}

// Calculate the total cost of fuel for the trip at different speeds
const totalCost = {};
for (const speed in gallonsNeeded) {
    totalCost[speed] = gallonsNeeded[speed] * costPerGallon;
}

// Check if the budget is enough to cover the fuel expense at different speeds
const isBudgetEnough = {};
for (const speed in totalCost) {
    isBudgetEnough[speed] = totalCost[speed] <= fuelBudget;
}

// Calculate the time taken for the trip at different speeds
const timeTaken = {};
for (const speed in totalCost) {
    timeTaken[speed] = totalDistance / parseInt(speed);
}

// Output the results
for (const speed in gallonsNeeded) {
    console.log(`Results for speed ${speed} mph:`);
    console.log(`Gallons needed: ${gallonsNeeded[speed]}`);
    console.log(`Total cost of fuel: $${totalCost[speed]}`);
    console.log(`Is budget enough: ${isBudgetEnough[speed]}`);
    console.log(`Time taken for the trip: ${timeTaken[speed]} hours`);
    console.log("---------------------------------------------");
}
