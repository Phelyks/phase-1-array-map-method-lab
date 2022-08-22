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
]

const titleCased = () => {
  return tutorials
}

const newTitleCased = tutorials.map(tutorials => {
  const tutorial = tutorial.split('');
  const tutorialCap = tutorial.map(tutor => tutor[0].toUpperCase() + tutor.slice(1,tutor.length));
  const cased = tutorialCap.join('');
  return cased;
})

console.log(newTitleCased)