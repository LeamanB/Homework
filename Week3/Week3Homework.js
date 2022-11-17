const pizzaToppings = ["sausage", "mushrooms", "peppers", "cheese"];

function greetCustomer() {
    let varny = "Hi. Welcome to the Pizza Place. Our toppings are ";
    for (let topping of pizzaToppings) {
        varny += ` ${topping},`;
        // console.log(topping);
    }
    console.log(varny)
}
greetCustomer();

// const cheeses = ["cheddar", 2, true, "parma"]
// for (let chim of cheeses) {
    // console.log(chim);
// }





function getPizzaOrder(size, crust, ...toppings) {
    let varny = `One ${size} ${crust} crust pizza with `;
    for (let topping of toppings) {
        varny += ` ${topping},`;
        // console.log(topping);
    }
    varny += " coming up!";
    console.log(varny);
    return [size, crust, toppings];

}
// getPizzaOrder("12 inch", "Wheat", "sausage", "bacon" );
// console.log(output);

function preparePizza([size, crust, toppings]) {
    console.log("Now cooking pizza")
    return {
      size: size,
      crust: crust,
      toppings: toppings
    }
}
// preparePizza(getPizzaOrder("12 inch", "Wheat", "sausage", "bacon" ));


function servePizza(pizza) {
    let varny = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
    for (let topping of pizza.toppings) {
        varny += ` ${topping},`;
        // console.log(topping);
    }
    varny += " Enjoy!";
    console.log(varny);
    return pizza
}
servePizza(preparePizza(getPizzaOrder("12 inch", "Wheat", "sausage", "bacon" )));


let output1 = getPizzaOrder("12 inch", "Wheat", "sausage", "bacon" );
let output2 = preparePizza(output1);
let output3 = servePizza(output2);
