export const quizData = [
  {
    id: 0,
    question: `Inside which HTML element do we put the JavaScript?`,
    options: [`<scripting>`, `<script>`, `<javascript>`, `<js>`],
    answer: `<script>`,
  },
  {
    id: 1,
    question: `What is the correct syntax for referring to an external script called "xxx.js"?`,
    options: [
      `<script name="xxx.js">`,
      `<script href="xxx.js">`,
      `<script src="xxx.js">`,
    ],
    answer: `<script src="xxx.js">`,
  },
  {
    id: 2,
    question: `How to write an IF statement for executing some code if "i" is NOT equal to 5?`,
    options: [`if i <> 5`, `if (i <> 5)`, `if i =! 5 then`, `if (i != 5)`],
    answer: `if (i != 5)`,
  },
  {
    id: 3,
    question: `How can you add a comment in a JavaScript?`,
    options: [
      `//This is a comment`,
      `'This is a comment`,
      `<!--This is a comment-->`,
    ],
    answer: `//This is a comment`,
  },
  {
    id: 4,
    question: `How do you round the number 7.25, to the nearest integer?`,
    options: [`rnd(7.25)`, `round(7.25)`, `Math.rnd(7.25)`, `Math.round(7.25)`],
    answer: `Math.round(7.25)`,
  },
];
