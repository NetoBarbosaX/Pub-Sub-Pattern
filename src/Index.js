import "./styles.css";
import PubSub from "./PubSub";

const firstInput = document.getElementById("first-input");
const secondInput = document.getElementById("second-input");
const firstSubscriberBtn = document.getElementById("first-subscriber-btn");
const secondSubscriberBtn = document.getElementById("second-subscriber-btn");
const firstUnSubscriberBtn = document.getElementById("first-un-subscriber-btn");
const secondUnSubscriberBtn = document.getElementById(
  "second-un-subscriber-btn"
);
const textFirstSubscriber = document.getElementById("first-subscriber");
const textSecondSubscriber = document.getElementById("second-subscriber");

const firstText = (e) => (textFirstSubscriber.innerText = `${e}`);
const secondtText = (e) => (textSecondSubscriber.innerText = `${e}`);

firstInput.addEventListener("input", (e) =>
  PubSub.publish("first-event", e.target.value)
);

secondInput.addEventListener("input", (e) =>
  PubSub.publish("second-event", e.target.value)
);

firstSubscriberBtn.addEventListener("click", (e) => {
  e.preventDefault();
  PubSub.subscribe("first-event", firstText);
});

firstUnSubscriberBtn.addEventListener("click", (e) => {
  e.preventDefault();
  PubSub.unsubscribe("first-event", firstText);
});

secondSubscriberBtn.addEventListener("click", (e) => {
  e.preventDefault();
  PubSub.subscribe("second-event", secondtText);
});

secondUnSubscriberBtn.addEventListener("click", (e) => {
  e.preventDefault();
  PubSub.unsubscribe("second-event", secondtText);
});
