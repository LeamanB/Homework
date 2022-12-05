
/*
  TODO: Create a new variable for each new condition stated below and then create a new H1 and unordered list (if necessary) for each condition and populate it using the same method as demonstrated below.

  When completed share the URL to your stackBlitz with your TA directly via Slack.   We don't want to spoil anyone else's dinner!

  If your adventurous, add your own attributes to the dishes or make your dinner more appetizing by adding some CSS styling.
*/

const dishes = [
  {
    name: 'Turkey',
    calories: 100,
    cost: 7,
  },
  {
    name: 'Potatoes',
    calories: 75,
    cost: 2,
  },
  {
    name: 'Cranberry Sauce',
    calories: 150,
    cost: 3,
  },
  {
    name: 'Corn',
    calories: 50,
    cost: 2,
  },
  {
    name: 'Pumkin Pie',
    calories: 404,
    cost: 5,
  },
  {
    name: 'Dressing',
    calories: 110,
    cost: 2,
  },
];



// Michael hates cranberry, use the filter method on the "dishes" array to create a new array called "michaelPlate" that only contains food items from the "dishes" array that don't contain cranberry.
const nocranberrydishes = dishes.filter((nocrans) => {
  return nocrans.name != "Cranberry Sauce"
})

console.log(nocranberrydishes)

// David treats cranberry relish like Frank's Red Hot. Use a map method on the "dishes" array to create a new array called "davidPlate" that replicates the original dishes array but with "topped with Cranberry Sauce" concatenated to each dish name.

const davidPlate = dishes.map((cransauce) => console.log([cransauce.name] + " topped with Cranberry Sauce"));

// Matt is watching his calories but also doesn't like cranberries.   Use the reduce method on the "dishes" array to create a new variable called "countingCalories" and calculate the total number of calories that will be consumed.

const countingCalories = dishes.reduce((currentTotal, cal) => {
    return cal.calories + currentTotal
}, 0)

console.log(countingCalories)

// Gerald cannot afford to get normal amount of food this thanksgiving and only can afford 20 bucks worth of food. Iterate through the array of dishes and cost to print the list of items that are within the Gerald’s budget. If a food item is in budget print “add to cart”. If it’s out of budget print “sorry pal maybe next year”. Filter list of food items and print filtered list that are under $5.

const Under5 = dishes.filter((cheapskate) => {
    return cheapskate.cost < 5 
}) 
console.log(Under5)

if (Under5 < 5 ) {
    console.log("add to cart")
} else {
    console.log("sorry pal, maybe next year")
}

// Add your own personal spin on the above and create your own plate

// Can only eat 404 calorie meal:
const only404cals = dishes.find((fourohfour) => {
    return fourohfour.calories = 404
})
console.log(only404cals);

// Do any dishes cost more than 10? The answer is no:
const spender = dishes.some((spend) => {
    return spend.cost > 10 
})
console.log(spender)

// Is every dish over 45 calories? Yes:
const hungry = dishes.every((eating) => {
    return eating.calories > 45 
})
console.log(hungry)

