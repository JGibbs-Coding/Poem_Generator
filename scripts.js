function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    //replace holding text with response path
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  //let poemFormElement = document.querySelector("#poemGeneratorForm");
  //poemFormElement.addEventListener("submit", generatePoem);

  //this has been relocated to the displayPoem function
  //new Typewriter("#poem", {
  //strings: ["Generated poem goes in here"],
  //autoStart: true,
  //delay: 1,
  //cursor: "",
  // });

  //build the API URL
  let promptInput = document.querySelector("#promptInstructions");

  let apiKey = "7fftc541dbabc3018759foaa254e09a2";
  let prompt = `User instructions - Generate a poem about ${promptInstructions.value}`;
  let context =
    "You have a love of Shakespear and writing short poems. You mission is to generate a six line poem and separate each line with a <br />. Make sure to use the user instructions. Please sign at the end of the Poem using, SheCodes AI, in a <strong> element.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class="blink">⌛ Generating your poem about ${promptInstructions.value}<span/>`;

  console.log("Generating poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  //make a call to the API using Axios
  axios.get(apiURL).then(displayPoem);
  //display the AI generated poem
}

let poemFormElement = document.querySelector("#poemGeneratorForm");
poemFormElement.addEventListener("submit", generatePoem);
