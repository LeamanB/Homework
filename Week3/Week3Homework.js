
const pizzaToppings = ["sausage", " mushrooms", " peppers", " cheese"];

function greetCustomer() {
    console.log(`Hi. Welcome to the Pizza Place. Our toppings are ${pizzaToppings}`)
}
return greetCustomer();


function getPizzaOrder(size = "12 inches", crust = "Whole Wheat", ...toppings = pizzaToppings) {
    console.log(`One large thick crust pizza with ${size}, ${crust}, and ${toppings} coming up!`)
}
return getPizzaOrder();


function preparePizza()
const pizza = [
    { size: "12 inches"}, 
    { crust: "Whole Wheat"},
    {...toppings = pizzaToppings}, 

    console.log("Now cooking pizza[pizza.crust]")
    
];
return preparePizza;

function servePizza() {
    console.log(`Order up! Here's your ${pizza.size}, ${pizza.crust} crust pizza with ${pizza.toppings}`)
};
return servePizza;


return preparePizza(greetCustomer(getPizzaOrder(servePizza)));
