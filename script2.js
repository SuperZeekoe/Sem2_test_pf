// GO BACK BUTTONS
// const back1 = document.getElementsByClassName("back1");
const back1 = document.querySelectorAll(".back1");
const back2 = document.querySelectorAll(".back2");
const topContent = document.querySelectorAll(".image-link");
const bottomContent = document.querySelectorAll(".bottom-content");

// topContent[0].addEventListener("click", function () {
//   console.log("click");
//   bottom1.style.display = "visible";
//   bottom1.style.zIndex = "2";
// });

// topContent[1].addEventListener("click", function () {
//   console.log("clicky2");
//   bottom2.style.display = "visible";
//   bottom2.style.zIndex = "2";
// });

// bottomContent[0].addEventListener("click", function () {
//   console.log("click");

//   bottom1.style.display = "hidden";
//   bottom2.style.display = "hidden";
//   bottom3.style.display = "hidden";
//   bottom4.style.display = "hidden";
//   bottom5.style.display = "hidden";
//   bottom6.style.display = "hidden";
//   bottom7.style.display = "hidden";
//   bottom8.style.display = "hidden";

//   bottom1.style.zIndex = "0";
//   bottom2.style.zIndex = "0";
//   bottom3.style.zIndex = "0";
//   bottom4.style.zIndex = "0";
//   bottom5.style.zIndex = "0";
//   bottom6.style.zIndex = "0";
//   bottom7.style.zIndex = "0";
//   bottom8.style.zIndex = "0";
// });

// back2.addEventListener("click", function () {
//   console.log("click-back2");
//   bottom1.style.display = "visible";
//   bottom2.style.display = "visible";
//   bottom1.style.zIndex = "0";
//   bottom2.style.zIndex = "0";
// });

// SWITCH BUTTONS MAIN
const img1swap = document.getElementById("img1");
const img2swap = document.getElementById("img2");
const img3swap = document.getElementById("img3");
const img4swap = document.getElementById("img4");
const img5swap = document.getElementById("img5");
const img6swap = document.getElementById("img6");
const img7swap = document.getElementById("img7");
const img8swap = document.getElementById("img8");

const bottom1 = document.getElementById("bot1");
const bottom2 = document.getElementById("bot2");
const bottom3 = document.getElementById("bot3");
const bottom4 = document.getElementById("bot4");
const bottom5 = document.getElementById("bot5");
const bottom6 = document.getElementById("bot6");
const bottom7 = document.getElementById("bot7");
const bottom8 = document.getElementById("bot8");

const aboutbtn = document.getElementById("aboutbtn");
const contactbtn = document.getElementById("contactbtn");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

img1swap.addEventListener("click", function () {
  console.log("click");
  bottom1.style.display = "visible";
  bottom1.style.zIndex = "2";
  bottom2.style.zIndex = "-2";
  bottom3.style.zIndex = "-2";
  bottom4.style.zIndex = "-2";
  bottom5.style.zIndex = "-2";
  bottom6.style.zIndex = "-2";
  bottom7.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
  // bottom8.style.zIndex = "-2";
});

img2swap.addEventListener("click", function () {
  console.log("click2");
  bottom2.style.display = "visible";
  bottom2.style.zIndex = "2";
  bottom1.style.zIndex = "-2";
  bottom3.style.zIndex = "-2";
  bottom4.style.zIndex = "-2";
  bottom5.style.zIndex = "-2";
  bottom6.style.zIndex = "-2";
  bottom7.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
  // bottom8.style.zIndex = "-2";
});

img3swap.addEventListener("click", function () {
  console.log("click3");
  bottom3.style.display = "visible";
  bottom3.style.zIndex = "2";
  bottom1.style.zIndex = "-2";
  bottom2.style.zIndex = "-2";
  bottom4.style.zIndex = "-2";
  bottom5.style.zIndex = "-2";
  bottom6.style.zIndex = "-2";
  bottom7.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
  // bottom8.style.zIndex = "-2";
});

img4swap.addEventListener("click", function () {
  console.log("click4");
  bottom4.style.display = "visible";
  bottom4.style.zIndex = "2";
  bottom1.style.zIndex = "-2";
  bottom2.style.zIndex = "-2";
  bottom3.style.zIndex = "-2";
  bottom5.style.zIndex = "-2";
  bottom6.style.zIndex = "-2";
  bottom7.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
  // bottom8.style.zIndex = "-2";
});

img5swap.addEventListener("click", function () {
  console.log("click5");
  bottom5.style.display = "visible";
  bottom5.style.zIndex = "2";
  bottom1.style.zIndex = "-2";
  bottom2.style.zIndex = "-2";
  bottom3.style.zIndex = "-2";
  bottom4.style.zIndex = "-2";
  bottom6.style.zIndex = "-2";
  bottom7.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
  // bottom8.style.zIndex = "-2";
});

img6swap.addEventListener("click", function () {
  console.log("click6");
  bottom6.style.display = "visible";
  bottom6.style.zIndex = "2";
  bottom1.style.zIndex = "-2";
  bottom2.style.zIndex = "-2";
  bottom3.style.zIndex = "-2";
  bottom4.style.zIndex = "-2";
  bottom5.style.zIndex = "-2";
  bottom7.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
  // bottom8.style.zIndex = "-2";
});

img7swap.addEventListener("click", function () {
  console.log("click7");
  bottom7.style.display = "visible";
  bottom7.style.zIndex = "2";
  bottom1.style.zIndex = "-2";
  bottom2.style.zIndex = "-2";
  bottom3.style.zIndex = "-2";
  bottom4.style.zIndex = "-2";
  bottom5.style.zIndex = "-2";
  bottom6.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
  // bottom8.style.zIndex = "-2";
});

aboutbtn.addEventListener("click", function () {
  console.log("about");
  about.style.display = "visible";
  about.style.zIndex = "2";
  bottom1.style.zIndex = "-2";
  bottom2.style.zIndex = "-2";
  bottom3.style.zIndex = "-2";
  bottom4.style.zIndex = "-2";
  bottom5.style.zIndex = "-2";
  bottom6.style.zIndex = "-2";
  bottom7.style.zIndex = "-2";
  contact.style.zIndex = "-2";
});
contactbtn.addEventListener("click", function () {
  console.log("contact");
  contact.style.display = "visible";
  contact.style.zIndex = "2";
  bottom1.style.zIndex = "-2";
  bottom2.style.zIndex = "-2";
  bottom3.style.zIndex = "-2";
  bottom4.style.zIndex = "-2";
  bottom5.style.zIndex = "-2";
  bottom6.style.zIndex = "-2";
  bottom7.style.zIndex = "-2";
  about.style.zIndex = "-2";
});

function backbtn1() {
  back1.forEach((element) => {
    element.addEventListener("click", function () {
      console.log("click-back1");
      setTimeout(backbtn1, 3000);
      bottom1.style.zIndex = "0";
      bottom2.style.zIndex = "0";
      bottom3.style.zIndex = "0";
      bottom4.style.zIndex = "0";
      bottom5.style.zIndex = "0";
      bottom6.style.zIndex = "0";
      bottom7.style.zIndex = "0";
      bottom8.style.zIndex = "0";
    });
  });
}

// SWITCH BUTTONS sub-CONTENT
const subContent1 = document.getElementById("sub-contentLink1");
const subContent2 = document.getElementById("sub-contentLink2");
const subContent3 = document.getElementById("sub-contentLink3");
const subContent4 = document.getElementById("sub-contentLink4");
const subContent5 = document.getElementById("sub-contentLink5");
const subContent6 = document.getElementById("sub-contentLink6");
const subContent7 = document.getElementById("sub-contentLink7");
const subContent8 = document.getElementById("sub-contentLink8");
const subContent9 = document.getElementById("sub-contentLink9");
const subContent10 = document.getElementById("sub-contentLink10");
const subContent11 = document.getElementById("sub-contentLink11");
const subContent12 = document.getElementById("sub-contentLink12");
const subContent13 = document.getElementById("sub-contentLink13");
const subContent14 = document.getElementById("sub-contentLink14");
const subContent15 = document.getElementById("sub-contentLink15");
const subContent16 = document.getElementById("sub-contentLink16");
const subContent17 = document.getElementById("sub-contentLink17");

const bottom2_1 = document.getElementById("bot2_1");
const bottom2_2 = document.getElementById("bot2_2");
const bottom2_3 = document.getElementById("bot2_3");
const bottom2_4 = document.getElementById("bot2_4");
const bottom2_5 = document.getElementById("bot2_5");
const bottom2_6 = document.getElementById("bot2_6");
const bottom2_7 = document.getElementById("bot2_7");
const bottom2_8 = document.getElementById("bot2_8");
const bottom2_9 = document.getElementById("bot2_9");
const bottom2_10 = document.getElementById("bot2_10");
const bottom2_11 = document.getElementById("bot2_11");
const bottom2_12 = document.getElementById("bot2_12");
const bottom2_13 = document.getElementById("bot2_13");
const bottom2_14 = document.getElementById("bot2_14");
const bottom2_15 = document.getElementById("bot2_15");
const bottom2_16 = document.getElementById("bot2_16");
const bottom2_17 = document.getElementById("bot2_17");

subContent1.addEventListener("click", function () {
  console.log("click2_1");
  bottom2_1.style.display = "visible";
  bottom2_1.style.zIndex = "2";
  bottom2_2.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});

subContent2.addEventListener("click", function () {
  console.log("click2_2");
  bottom2_2.style.display = "visible";
  bottom2_2.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});

subContent3.addEventListener("click", function () {
  console.log("click2_3");
  bottom2_3.style.display = "visible";
  bottom2_3.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});

subContent4.addEventListener("click", function () {
  console.log("click2_4");
  bottom2_4.style.display = "visible";
  bottom2_4.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});
subContent5.addEventListener("click", function () {
  console.log("click2_5");
  bottom2_5.style.display = "visible";
  bottom2_5.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});
subContent6.addEventListener("click", function () {
  console.log("click2_6");
  bottom2_6.style.display = "visible";
  bottom2_6.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});
subContent7.addEventListener("click", function () {
  console.log("click2_7");
  bottom2_7.style.display = "visible";
  bottom2_7.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});
subContent8.addEventListener("click", function () {
  console.log("click2_7");
  bottom2_8.style.display = "visible";
  bottom2_8.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});
subContent9.addEventListener("click", function () {
  console.log("click2_7");
  bottom2_9.style.display = "visible";
  bottom2_9.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});
subContent10.addEventListener("click", function () {
  console.log("click2_7");
  bottom2_10.style.display = "visible";
  bottom2_10.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});
subContent11.addEventListener("click", function () {
  console.log("click2_7");
  bottom2_11.style.display = "visible";
  bottom2_11.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});
subContent12.addEventListener("click", function () {
  console.log("click2_7");
  bottom2_12.style.display = "visible";
  bottom2_12.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});
subContent13.addEventListener("click", function () {
  console.log("click2_7");
  bottom2_13.style.display = "visible";
  bottom2_13.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});
subContent14.addEventListener("click", function () {
  console.log("click2_7");
  bottom2_14.style.display = "visible";
  bottom2_14.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});
subContent15.addEventListener("click", function () {
  console.log("click2_7");
  bottom2_15.style.display = "visible";
  bottom2_15.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});
subContent16.addEventListener("click", function () {
  console.log("click2_7");
  bottom2_16.style.display = "visible";
  bottom2_16.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_17.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});
subContent17.addEventListener("click", function () {
  console.log("click2_7");
  bottom2_17.style.display = "visible";
  bottom2_17.style.zIndex = "2";
  bottom2_1.style.zIndex = "-2";
  bottom2_3.style.zIndex = "-2";
  bottom2_4.style.zIndex = "-2";
  bottom2_5.style.zIndex = "-2";
  bottom2_6.style.zIndex = "-2";
  bottom2_2.style.zIndex = "-2";
  bottom2_8.style.zIndex = "-2";
  bottom2_9.style.zIndex = "-2";
  bottom2_10.style.zIndex = "-2";
  bottom2_11.style.zIndex = "-2";
  bottom2_12.style.zIndex = "-2";
  bottom2_13.style.zIndex = "-2";
  bottom2_14.style.zIndex = "-2";
  bottom2_15.style.zIndex = "-2";
  bottom2_16.style.zIndex = "-2";
  bottom2_7.style.zIndex = "-2";
  contact.style.zIndex = "-2";
  about.style.zIndex = "-2";
});

// Tutorial URL: https://www.youtube.com/watch?v=PkADl0HubMY
// Creation of variable for the image track
const track = document.getElementById("image-track");
// registering position on mousedown
window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};
// Sets data attribute to 0 when mouse is up
window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";

  track.dataset.prevPercentage = track.dataset.percentage;
};

// Sets data attribute to 0 when mouse is out of window
window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;
  // calculates the mouse movement and sets the percentage of the track to the movement of the mouse (negative)
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;
  // calculates the percentage of the track to the movement of the mouse (negative) and sets the track to the new percentage position
  var percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  // floats the nextPercentage variable
  parseFloat(nextPercentage);
  // console.log(nextPercentage);
  console.log(e);
  // sets the percentage of the track to the new percentage
  track.dataset.percentage = nextPercentage;
  // transforms the track based on the outcome of nextPercentage -50%
  track.style.transform = `translate(${nextPercentage}%, -50%)`;

  // Slightly buggy animation. If you click an image before initializing the click & drag, the image track stays stuck.
  // If you however first click & drag even a little bit, everything is fine.
  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};

// const scrollContainer = document.querySelector("#pageGrab");

// scrollContainer.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   console.log(evt);
//   // console.log(evt.srcElement.offsetLeft);
//   scrollContainer.scrollR += evt.deltaY;
// });
