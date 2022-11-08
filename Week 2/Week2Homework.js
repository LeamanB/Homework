const pizzaPlace = "Lee's Pizzeria Party";
const numberOfToppings = "80 Toppings";

console.log(pizzaPlace + " with " + numberOfToppings);

const customer = "Freddy";
  console.log(`Hi ${customer}, Welcome to ${pizzaPlace}, where we have ${numberOfToppings}`);

let order = 12;

if(order <= 10) {
  console.log('Quality, not quantity')
} else if (order > 10) {
  console.log('A whole lot of pizza')
};
