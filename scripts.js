function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

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

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poemGeneratorForm");
poemFormElement.addEventListener("submit", generatePoem);
