import "bootstrap";
import "./style.css";

window.onload = function() {

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let excusePart1 = who[Math.floor(Math.random() * who.length)];
  let excusePart2 = action[Math.floor(Math.random() * action.length)];
  let excusePart3 = what[Math.floor(Math.random() * what.length)];
  let excusePart4 = when[Math.floor(Math.random() * when.length)];

  let excuse = excusePart1 + " " + excusePart2 + " " + excusePart3 + " " + excusePart4;

  console.log(excuse);

  let element = document.querySelector("#excuse")
  element.innerText = excuse;

};
