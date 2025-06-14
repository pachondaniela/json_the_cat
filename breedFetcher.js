const needle = require("needle");
const readline = require("readline");

// Step 1: Ask the user for input:

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Step 2: Built the URL parameters so that we can update the breed the user is looking for

rl.question("what breed do you want to learn about? " , function(breed) {


  const baseURL = "https://api.thecatapi.com/v1/breeds/search";
  const finalURL = `${baseURL}?q=${encodeURIComponent(breed)}`;

  if (!breed) {
    console.log("Cat breed doesn't exist. Please choose another one or check spelling");
    rl.close();
    return;
  }

  needle.get(finalURL, (error, response, body) => {
    if (error) {
      console.error("An error occurred:", error.message);
    }

    if (body.length === 0) {
      console.log("Breed doesnt exist");
    } else {
      console.log(body[0].description);
    }

  });
  rl.close();
});

