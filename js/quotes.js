const quotes1 = [
  { quote: "명언1", author: "사람1" },
  { quote: "명언2", author: "사람2" },
  { quote: "명언3.", author: "사람3" },
  { quote: "명언4", author: "사람4" },
  { quote: "명언5", author: "사람5" },
  { quote: "명언6", author: "사람6" },
  { quote: "명언7", author: "사람7" },
  { quote: "명언8", author: "사람8" },
  { quote: "명언9", author: "사람9" },
  { quote: "명언10", author: "사람10" },
];

const quote2 = document.querySelector("#quote span:first-child");
const author3 = document.querySelector("#quote span:last-child");

const todaysQuote = quotes1[Math.floor(Math.random() * quotes1.length)];

quote2.innerText = todaysQuote.quote;
author3.innerText = todaysQuote.author;
