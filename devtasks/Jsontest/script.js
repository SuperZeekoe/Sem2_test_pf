const emptylist = document.getElementById("peoplelist");

// Start of JSON assignment given by Frank.
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
    // emptylist.innerHTML += "<img alt='texto' src='" + element.picture + "'>";
    emptylist.innerHTML +=
      "<div>" +
      "<img class='images' alt='texto' src='" +
      element.picture +
      "'>" +
      "<p>" +
      element.name +
      "</p>" +
      "<p>" +
      element.age +
      "</p>" +
      "</div>";
    // emptylist.innerHTML += "<p>" + element.age + "</p>" + "</div>";
    emptylist.innerHTML += "<br>";
    // const imgstyle = document.getElementsByClassName("images");
    // imgstyle.style.width = "100px";
    // imgstyle.style.height = "100px";
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
