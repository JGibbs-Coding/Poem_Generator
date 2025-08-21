function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Generated poem goes in here"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poemGeneratorForm");
poemFormElement.addEventListener("submit", generatePoem);
