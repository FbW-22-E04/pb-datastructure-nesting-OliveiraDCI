"use strict";
console.clear();

console.log("-----1-----");
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];
for (const arr of board) {
  for (const item of arr) {
    console.log(item);
  }
}

console.log("-----2-----");
const doggo = {
  name: "Bart",
  breed: "Labrador",
  favoriteFoods: ["bone", "shoes", "other dogs :D"],
  logFoods: function () {
    for (const food of doggo.favoriteFoods) {
      console.log("2.4", food);
    }
  },
};
const secondFood = doggo.favoriteFoods[1];
console.log("2.3", secondFood);
doggo.logFoods();

console.log("-----3-----");
const recipes = {
  ingredients: {
    butter: "Two tea spoons",
    sugar: "One cup",
    flour: "Three tbsp",
  },
  printIngredients() {
    return Object.values(this.ingredients);
  },
};
recipes.ingredients.ginger = "a pinch";
delete recipes.ingredients.sugar;
recipes.ingredients["brow sugar"] = "One cup";
console.log(recipes.printIngredients());
