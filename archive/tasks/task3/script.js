const a = document.getElementById("styleswitch");
const b = document.getElementById("switcher");
count = 0;

b.addEventListener("click", function () {
  count++;
  if (count == 1) {
    a.setAttribute("href", "./two.css");
    console.log("switch work?");
  } else if (count == 2) {
    a.setAttribute("href", "./three.css");
  } else if (count == 3) {
    a.setAttribute("href", "./one.css");
    count = 0;
  }
});

// did some fun debugging with this one.
// Turns out using an <a> as a button is a bad idea.
// Changed <a> to a <button> in html and code worked fine.
