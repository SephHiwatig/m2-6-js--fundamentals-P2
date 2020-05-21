// Exercise 4
// -------------------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

// We have an Object that contains food pairings so that our sommelier can make
// educated recommendations. What we need is an Array that only holds all the foods.

// 6.1. Write a script that will print out all foods in the object.

// 6.2 Write a script that outputs each key/value pair to the console a sentence like this:
// "With <FOOD_ITEM>, it is best to have <BEVERAGE>."
let foods = Object.keys(foodPairings);
console.log("Foods: " + foods.join(", "));
foods.forEach((food) => {
  console.log(`With ${food}, it is best to have ${foodPairings[food]}.`);
});
