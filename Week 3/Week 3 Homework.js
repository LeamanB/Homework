
const pizzaToppings = ["sausage", "mushrooms", "peppers", "cheese"];

function greetCustomer() {
    console.log("Welcome to the Pizza Place. Our toppings are" + pizzaToppings);
}

function getPizzaOrder() { 
    const size = 12
    const crust = "whole wheat"
    toppings = pizzaToppings

    console.log("One large thick crust pizza with" + size + crust + toppings + "coming up!");
};

function preparePizza("12 inch" = size, "Whole Wheat" = crust, toppings = pizzaToppings) {
    console.log(${size});
    console.log(${crust});
    console.log(${toppings});
    console.log("Cooking pizza that is" + size + crust + "with" + toppings);
};

function servePizza() {
    console.log("Order up! Here's your large thick crust pizza with" + size + crust + "and" + toppings + ". Enjoy!");
};


greetCustomer;
