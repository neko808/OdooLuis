/*  Accordion  */
if (document.readyState !== "loading") {
  console.log("ready!");
  ready();
} else {
  document.addEventListener("DOMContentLoaded", ready);
}

function ready() {
  var accordion = document.getElementsByTagName("dt");

  for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      accordionClick(event);
    });
  }
}

var accordionClick = (eventHappened) => {
  console.log(eventHappened);
  var targetClicked = event.target;
  console.log(targetClicked);
  var classClicked = targetClicked.classList;
  console.log("target clicked: " + targetClicked);
  console.log(classClicked[0]);
  while (classClicked[0] != "description-title") {
    console.log("parent element: " + targetClicked.parentElement);
    targetClicked = targetClicked.parentElement;
    classClicked = targetClicked.classList;
    console.log("target clicked while in loop:" + targetClicked);
    console.log("class clicked while in loop: " + classClicked);
  }
  var description = targetClicked.nextElementSibling;
  console.log(description);
  var expander = targetClicked.children[0];
  if (description.style.maxHeight) {
    description.style.maxHeight = null;
    expander.innerHTML = "&#10133;";
  } else {
    var allDescriptions = document.getElementsByTagName("dd");
    for (var i = 0; i < allDescriptions.length; i++) {
      console.log("current description: " + allDescriptions[i]);
      if (allDescriptions[i].style.maxHeight) {
        console.log("there is a description already open");
        allDescriptions[i].style.maxHeight = null;
        allDescriptions[i].previousElementSibling.children[0].innerHTML =
          "&#10133;";
      }
    }
    description.style.maxHeight = description.scrollHeight + "px";
    expander.innerHTML = "&#10134;";
  }
};

/*  Responsive menu  */
// const burgerMenu = document.getElementById("hamb");
// const overlay = document.getElementById("menu");
// burgerMenu.addEventListener("click", function () {
//   this.classList.toggle("close");
//   overlay.classList.toggle("overlay");
// });
