// Create the student object
const student = {
  name: "John"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Test cases
console.log(getKeys(student)); 
// Output: ["name"]

// Additional test
const student2 = {
  name: "Alice",
  age: 20,
  city: "Mumbai"
};

console.log(getKeys(student2)); 
// Output: ["name", "age", "city"]