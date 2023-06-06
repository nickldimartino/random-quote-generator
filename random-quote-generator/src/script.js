// array containg quotes and the authors
const quotes = [
    {
      id: 1,
      text: "Quote 1",
      author: "- Author 1"
    },
    {
      id: 2,
      text: "Quote 2",
      author: "- Author 2"
    },
    {
      id: 3,
      text: "Quote 3",
      author: "- Author 3"
    },
  ];

// Initialize the text and author values
let text = "";
let author = "";

// Function to generate a random quote
function generateQuote() {  
  // generate a random number in the range of the auotes array
  let randNum = Math.floor(Math.random() * quotes.length);
  
  // Set the text and author values to the corresponding values in 
  // the quotes array
  text = quotes[randNum].text;
  author = quotes[randNum].author;
  
  // set the text and author div elements in HTML.text to the values
  // retrieved from the array
  document.getElementById("text").innerHTML = text;
  document.getElementById("author").innerHTML = author;
}