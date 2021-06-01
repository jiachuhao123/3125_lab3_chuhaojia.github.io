// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Milk",
		lactose_intolerance: true,
		nut_allergies: false,
		organic: true,
		price: 4,
		category: "Dairy_products"
	},
	{
		name: "Cake",
		lactose_intolerance: true,
		nut_allergies: true,
		organic: false,
		price: 7.5,
		category: "Dairy_products"
	},
	{
		name: "Peanuts",
		lactose_intolerance: false,
		nut_allergies: true,
		organic: true,
		price: 3.5,
		category: "Nuts"
	},
	{
		name: "Almonds",
		lactose_intolerance: false,
		nut_allergies: true,
		organic: true,
		price: 2,
		category: "Nuts"
	},
	{
		name: "Strawberries",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: true,
		price: 4.5,
		category: "Fruits"
	},
	{
		name: "Apples",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: true,
		price: 3,
		category: "Fruits"
	},
	{
		name: "Bread",
		lactose_intolerance: false,
		nut_allergies: true,
		organic: false,
		price: 2.35,
		category: "Others"
	},
	{
		name: "Tomato",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: true,
		price: 1,
		category: "Others"
	},
	{
		name: "Beef",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: false,
		price: 9.5,
		category: "Meats"
	},
	
	{
		name: "Lamb",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: false,
		price: 9,
		category: "Meats"
	},
	
	{
		name: "Hamburger",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: false,
		price: 9.99,
		category: "Fast_food"
	},
	
	{
		name: "Pizza",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: false,
		price: 8.88,
		category: "Fast_food"
	},
	
	{
		name: "Chicken_wings",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: false,
		price: 6.66,
		category: "Fast_food"
	},
	
	{
		name: "Kitchen_knife",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: false,
		price: 3.99,
		category: "Kitchen"
	},
	{
		name: "Pot",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: false,
		price: 9.99,
		category: "Kitchen"
	},
	{
		name: "Soy_Sauce",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: false,
		price: 4.99,
		category: "Kitchen"
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProductsDairy_products(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerance") && (prods[i].lactose_intolerance == false)&&(prods[i].category=="Dairy_products")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerance_and_organic") && (prods[i].lactose_intolerance == false) && (prods[i].organic==true)&&(prods[i].category=="Dairy_products")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies") && (prods[i].nut_allergies == false)&&(prods[i].category=="Dairy_products")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies_and_organic") && (prods[i].nut_allergies == false) && (prods[i].organic==true)&&(prods[i].category=="Dairy_products")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false))&&(prods[i].category=="Dairy_products")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies_and_organic") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false) && (prods[i].organic==true))&&(prods[i].category=="Dairy_products")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None")&&(prods[i].category=="Dairy_products")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None_and_organic")&&(prods[i].organic==true)&&(prods[i].category=="Dairy_products")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "I_want_kitchen_item")){
			
		}
		else if ((restriction == "I_want_fast_food")){
		
		}
	}
	product_names.sort();
	return product_names;
}

function restrictListProductsNuts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerance") && (prods[i].lactose_intolerance == false)&&(prods[i].category=="Nuts")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerance_and_organic") && (prods[i].lactose_intolerance == false) && (prods[i].organic==true)&&(prods[i].category=="Nuts")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies") && (prods[i].nut_allergies == false)&&(prods[i].category=="Nuts")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies_and_organic") && (prods[i].nut_allergies == false) && (prods[i].organic==true)&&(prods[i].category=="Nuts")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false))&&(prods[i].category=="Nuts")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies_and_organic") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false) && (prods[i].organic==true))&&(prods[i].category=="Nuts")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None")&&(prods[i].category=="Nuts")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None_and_organic")&&(prods[i].organic==true)&&(prods[i].category=="Nuts")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "I_want_kitchen_item")){
			
		}
		else if ((restriction == "I_want_fast_food")){
		
		}
	}
	product_names.sort();
	return product_names;
}

function restrictListProductsFruits(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerance") && (prods[i].lactose_intolerance == false)&&(prods[i].category=="Fruits")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerance_and_organic") && (prods[i].lactose_intolerance == false) && (prods[i].organic==true)&&(prods[i].category=="Fruits")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies") && (prods[i].nut_allergies == false)&&(prods[i].category=="Fruits")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies_and_organic") && (prods[i].nut_allergies == false) && (prods[i].organic==true)&&(prods[i].category=="Fruits")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false))&&(prods[i].category=="Fruits")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies_and_organic") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false) && (prods[i].organic==true))&&(prods[i].category=="Fruits")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None")&&(prods[i].category=="Fruits")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None_and_organic")&&(prods[i].organic==true)&&(prods[i].category=="Fruits")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "I_want_kitchen_item")){
			
		}
		else if ((restriction == "I_want_fast_food")){
		
		}
	}
	product_names.sort();
	return product_names;
}


function restrictListProductsOthers(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerance") && (prods[i].lactose_intolerance == false)&&(prods[i].category=="Others")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerance_and_organic") && (prods[i].lactose_intolerance == false) && (prods[i].organic==true)&&(prods[i].category=="Others")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies") && (prods[i].nut_allergies == false)&&(prods[i].category=="Others")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies_and_organic") && (prods[i].nut_allergies == false) && (prods[i].organic==true)&&(prods[i].category=="Others")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false))&&(prods[i].category=="Others")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies_and_organic") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false) && (prods[i].organic==true))&&(prods[i].category=="Others")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None")&&(prods[i].category=="Others")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None_and_organic")&&(prods[i].organic==true)&&(prods[i].category=="Others")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "I_want_kitchen_item")){
			
		}
		else if ((restriction == "I_want_fast_food")){
		
		}
	}
	product_names.sort();
	return product_names;
}


function restrictListProductsMeats(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerance") && (prods[i].lactose_intolerance == false)&&(prods[i].category=="Meats")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerance_and_organic") && (prods[i].lactose_intolerance == false) && (prods[i].organic==true)&&(prods[i].category=="Meats")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies") && (prods[i].nut_allergies == false)&&(prods[i].category=="Meats")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies_and_organic") && (prods[i].nut_allergies == false) && (prods[i].organic==true)&&(prods[i].category=="Meats")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false))&&(prods[i].category=="Meats")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies_and_organic") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false) && (prods[i].organic==true))&&(prods[i].category=="Meats")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None")&&(prods[i].category=="Meats")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None_and_organic")&&(prods[i].organic==true)&&(prods[i].category=="Meats")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "I_want_kitchen_item")){
			
		}
		else if ((restriction == "I_want_fast_food")){
		
		}
	}
	product_names.sort();
	return product_names;
}

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerance") && (prods[i].lactose_intolerance == false)){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerance_and_organic") && (prods[i].lactose_intolerance == false) && (prods[i].organic==true)){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies") && (prods[i].nut_allergies == false)){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies_and_organic") && (prods[i].nut_allergies == false) && (prods[i].organic==true)){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false))){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies_and_organic") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false) && (prods[i].organic==true))){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None_and_organic")&&(prods[i].organic==true)){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "I_want_kitchen_item")){
			
		}
		else if ((restriction == "I_want_fast_food")){
		
		}
	}
	product_names.sort();
	return product_names;
}

function restrictListProductsFast_food(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerance") && (prods[i].lactose_intolerance == false)&&(prods[i].category=="Fast_food")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerance_and_organic") && (prods[i].lactose_intolerance == false) && (prods[i].organic==true)&&(prods[i].category=="Fast_food")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies") && (prods[i].nut_allergies == false)&&(prods[i].category=="Fast_food")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies_and_organic") && (prods[i].nut_allergies == false) && (prods[i].organic==true)&&(prods[i].category=="Fast_food")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false))&&(prods[i].category=="Fast_food")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies_and_organic") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false) && (prods[i].organic==true))&&(prods[i].category=="Fast_food")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None")&&(prods[i].category=="Fast_food")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None_and_organic")&&(prods[i].organic==true)&&(prods[i].category=="Fast_food")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if (restriction == "I_want_kitchen_item"){
			
		}
		else if ((restriction == "I_want_fast_food")&&(prods[i].category=="Fast_food")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
	}
	product_names.sort();
	return product_names;
}

function restrictListProductsKitchen(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerance") && (prods[i].lactose_intolerance == false)&&(prods[i].category=="Kitchen")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerance_and_organic") && (prods[i].lactose_intolerance == false) && (prods[i].organic==true)&&(prods[i].category=="Kitchen")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies") && (prods[i].nut_allergies == false)&&(prods[i].category=="Kitchen")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies_and_organic") && (prods[i].nut_allergies == false) && (prods[i].organic==true)&&(prods[i].category=="Kitchen")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false))&&(prods[i].category=="Kitchen")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies_and_organic") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false) && (prods[i].organic==true))&&(prods[i].category=="Kitchen")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None")&&(prods[i].category=="Kitchen")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None_and_organic")&&(prods[i].organic==true)&&(prods[i].category=="Kitchen")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "I_want_kitchen_item")&&(prods[i].category=="Kitchen")){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "I_want_fast_food")){
			
		}
	}
	product_names.sort();
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf("$"+products[i].price+" "+products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}