// Tutorial URL: https://www.youtube.com/watch?v=PkADl0HubMY
// Creating variable for image track
const track = document.getElementById("image-track");

// On mouse down, set the mouseDownAt data attribute to the x coordinate of the mouse
window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};

// On mouse up, set the mouseDownAt data attribute to 0 and set the prevPercentage data attribute to the current percentage
window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

// On mouse move, if the mouseDownAt data attribute is 0, return. Otherwise, calculate the mouse delta, the max delta, and the percentage.
// Then, calculate the next percentage, and set the percentage data attribute to the next percentage. Then, set the transform of the track to the next percentage.
// Then, animate the track to the next percentage. Then, for each image in the track, animate the object position to the next percentage.

// The mouse delta is the difference between the mouseDownAt data attribute and the x coordinate of the mouse.
// The max delta is half the width of the window.
// The percentage is the mouse delta divided by the max delta, multiplied by -100.
window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  track.style.transform = `translate(${nextPercentage}%, -50%)`;

  // Animate the track based on the next percentage
  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  // Animate the object position of each image
  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};
