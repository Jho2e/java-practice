const images1 = ["x.png", "y.jpg", "z.jpg"];

const chosenImage = images1[Math.floor(Math.random() * images1.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

const h2 = document.querySelector("#clock");
document.body.insertBefore(bgImage, h2);
