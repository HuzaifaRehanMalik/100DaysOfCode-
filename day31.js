// Create an array of your three favorite fruits and add a new fruit to the end of the array.
var fruit = ["apple", "banana", "orange"];
fruit.push("coconut");
console.log(fruit);
// Write a function to remove the last element from an array and return the removed element.
function removeElement(array) {
    return array.pop();
}
var favoriteFruit = ["apple", "banana", "orange"];
console.log(removeElement(favoriteFruit));
console.log(favoriteFruit);
// Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replaceFruit(fruitFavorite) {
    var index = fruitFavorite.indexOf("banana");
    if (index !== -1)
        fruitFavorite[index] = "mango";
}
var fruitFavorite = ["apple", "banana", "orange"];
replaceFruit(fruitFavorite);
console.log(fruitFavorite);
