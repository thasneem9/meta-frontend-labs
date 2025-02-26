// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (let i in dishData) {
       // console.log(dishData[i]);
       // console.log(dishData[i].name);
        var finalPrice;
        if (taxBoolean===true) {
            finalPrice= dishData[i].price * tax
        } else if (taxBoolean===false) {
            finalPrice=dishData[i].price
        } else {
            //console.log(`taxBool: ${taxBoolean}`)
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        //console.log("final: " + finalPrice)
        console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`)

    }
    
}

//getPrices(true);

// Implement getDiscount()
function getDiscount(taxBoolean,guests) {
    getPrices(taxBoolean);
   // console.log("guests:"+guests)
    if (typeof (guests) === 'number' && guests > 0 && guests < 30) {
        var discount = 0;

        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
            
        } 
        console.log('Discount is: $' + discount);
   }else {
            console.log("The second argument must be a number between 0 and 30")
            
        }
    
}
getDiscount("ac","0");
 
// Call getDiscount()
