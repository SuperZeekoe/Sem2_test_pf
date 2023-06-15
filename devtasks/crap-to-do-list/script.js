// Create a new task when clicking on the "Add (poop)" button
// It does this by adding a <li> element with the text input value

document.getElementById("printItem").addEventListener("click", (e) => {
  e.preventDefault();
  const ulSet = document.querySelector("#list");
  const text = document.querySelector("#title").value;

  console.log(ulSet);
  ulSet.innerHTML =
    ulSet.innerHTML +
    "<li>" +
    text +
    "<button class='delete'>Delete</button> </li>";

  // Also adds a delete button to each <li> element
  // When the delete button is clicked, it removes the <li> element from the list again
  var deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
});
