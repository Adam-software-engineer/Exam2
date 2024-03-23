// Exam2 Javascript
//
// make a request too https://api.chucknorris.io/jokes/random?category=movie using fetch
// Create an arrow function called “showNextJoke,” that doesn’t have any parameters. It should use the “fetch”
// Call the “showNextJoke” function as soon as the script loads (do not use an iife). That way a joke is loaded when the page is loaded/refreshed
// Create an event listener for the button, so that when the button is clicked “showNextJoke” is called, and a new joke is displayed

const showNextJoke = () => {
  fetch("https://api.chucknorris.io/jokes/random?category=movie")
    .then((response) => response.json())
    .then((data) => {
      const jokeDiv = document.getElementById("joke");
      jokeDiv.textContent = data.value;
    })
    .catch((error) => console.error("Error fetching joke:", error));
};

window.onload = showNextJoke;

document.querySelector("button").addEventListener("click", showNextJoke);
