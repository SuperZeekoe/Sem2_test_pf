const emptylist = document.getElementById("peoplepage");

fetch("data.json")
  .then((Response) => Response.json())
  .then((data) => jsononscreen(data));

// function jsononscreen(data) {
//   console.log(data);
//   data.forEach((emptylist) => testfunction(emptylist));
// }

function jsononscreen(data) {
  console.log(data);
  data.forEach((element) => {
    emptylist.innerHTML +=
      "<div>" +
      "<div class='container'>" +
      "<img class='images' alt='texto' src='" +
      element.picture +
      "'>" +
      "<p id='name'>" +
      element.name +
      "</p>" +
      "</div>" +
      "<p>" +
      element.company +
      "<br>" +
      element.age +
      "<br>" +
      element.favoriteFruit +
      "</p>" +
      "</div>";
    emptylist.innerHTML += "<br>";
  });
}

// function testfunction(emptylist) {
//   console.log(emptylist);
//   const li = document.createElement("li");
//   const img = document.createElement("img");

//   img.style.width = "100px";
//   img.style.height = "100px";
//   img.src = emptylist.picture;
//   //   emptylist.innerHTML += "<li>" + emptylist.name + "</li>";
//   document.getElementById("peoplelist").appendChild(li).innerHTML +=
//     emptylist.name;
//   document.getElementById("peoplelist").appendChild(img).innerHTML +=
//     emptylist.picture;
//   document.getElementById("peoplelist").appendChild(li).innerHTML +=
//     emptylist.age;
//   document.getElementById("peoplelist").appendChild(li).innerHTML +=
//     emptylist.company;
// }
