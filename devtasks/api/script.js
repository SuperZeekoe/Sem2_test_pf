const img = document.querySelector("#img-block");

document.querySelector("#btn-1").addEventListener("click", function () {
  fetch("https://api.waifu.pics/sfw/bonk")
    .then((Response) => Response.json())
    .then((data) => jsononscreen(data));
});
document.querySelector("#btn-2").addEventListener("click", function () {
  fetch("https://api.waifu.pics/sfw/cringe")
    .then((Response) => Response.json())
    .then((data) => jsononscreen(data));
});
document.querySelector("#btn-3").addEventListener("click", function () {
  fetch("https://api.waifu.im/search/?included_tags=marin-kitagawa")
    .then((Response) => Response.json())
    .then((data) => jsononscreen(data));
});

function jsononscreen(data) {
  img.src = data.url || data.images[0].url || data.img;
}

let textcolor = [
  "#eec842",
  "#80CED7",
  "#63C7B2",
  "#DE369D",
  "#F7B500",
  "#FFEEDB",
];
// TRUMP QUOTE API
// ///////////////////////////////
document.querySelector("#btn-4").addEventListener("click", function () {
  fetch("https://tronalddump.io/random/quote")
    .then((Response) => Response.json())
    .then((data) => quoteonscreen(data));
});

function quoteonscreen(data) {
  document.querySelector("#source").innerHTML = data._embedded.source[0].url;
  document.querySelector("#source").href = data._embedded.source[0].url;
  document.querySelector("#quote").innerHTML = data.value;
  document.querySelector("#quote").style.color =
    textcolor[Math.floor(Math.random() * textcolor.length)];
}

// Random advice api
// ///////////////////////////////
// document.getElementById("input").addEventListener("submit", function () {
//   fetch(
//     "https://api.adviceslip.com/advice/search/" +
//       document.getElementById("input").value
//   )
//     .then((Response) => Response.json())
//     .then((data) => console.log(data));
// });

document.querySelector("#btn-5").addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((Response) => Response.json())
    .then((data) => adviceonscreen(data));
});

function adviceonscreen(data) {
  console.log("test advice");
  document.querySelector("#source").innerHTML = "";
  document.querySelector("#source").href = "";
  document.querySelector("#quote").innerHTML = data.slip.advice;
  document.querySelector("#quote").style.color =
    textcolor[Math.floor(Math.random() * textcolor.length)];
}

// STOCK ADVICE API
// ///////////////////////////////
// document.querySelector("#btn-5").addEventListener("click", function () {
//   fetch("https://tradestie.com/api/v1/apps/reddit", {
//     mode: "no-cors",
//   })
//     .then((response) => response.json())
//     .then((body) => console.log(body));
//   // .then((response) => response.json())
//   // .then((data) => adviceonscreen(data));
// });

// document.querySelector("#btn-5").addEventListener("click", function () {
//   fetch("https://tradestie.com/api/v1/apps/reddit", {
//     mode: "no-cors",
//   }).then(
//     (response = async () => {
//       let data = await response.text();
//       let json = JSON.parse(data);
//       adviceonscreen(json);
//     })
//   );
// });

// function adviceonscreen(data) {
//   document.querySelector("#source").innerHTML = data[1].ticker;
//   document.querySelector("#quote").innerHTML = data[0].sentiment;
// }

// document.querySelector("#btn-5").addEventListener("click", function () {
//   fetch("https://tradestie.com/api/v1/apps/reddit")
//     .then((response) => response.json())
//     .then((body) => console.log(body));
// });
