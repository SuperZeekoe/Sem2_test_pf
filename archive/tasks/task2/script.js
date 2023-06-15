// const button = document.getElementById("click-button");

// button.addEventListener("click", printHello);

// function printHello() {

//   const image = document.createElement("img");
//   const imgParent = document.getElementById("test1");

//   const x = Math.floor(Math.random() * 1000);

//   image.src = "https://cataas.com/cat?height=" + x;
//   imgParent.appendChild(image);
// }

// document.addEventListener("click", example)
// function example(e){
// console.log(e)
// }

document.getElementById("test1").addEventListener("click", function (event) {
  const xC = event.clientX;
  const yC = event.clientY;
  console.log(event.clientX, event.clientY);
  const image = document.createElement("img");

  const randomWidth = Math.floor(Math.random() * 1000);

  image.src = "https://cataas.com/cat?height=" + randomWidth;
  image.style.position = "absolute";
  image.style.left = xC + "px";
  image.style.top = yC + "px";
  document.getElementById("test1").appendChild(image);
});
