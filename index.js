// Array of tutorials
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Function to capitalize the first letter of each word in a string
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Function to convert a sentence to title case
function titleCase(sentence) {
  const words = sentence.split(' '); // Split the sentence into an array of words
  const titleCasedWords = words.map(word => capitalizeFirstLetter(word)); // Capitalize the first letter of each word
  return titleCasedWords.join(' '); // Join the words back into a sentence
}

// Function to convert all tutorial titles to title case
function titleCased() {
  return tutorials.map(titleCase); // Use map() to apply titleCase() function to each tutorial title
}

// Test the function
console.log(titleCased());
