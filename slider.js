// VARIABLES
// scroll positions of various pictures (in px)
const pic1 = 0;
const pic2 = 304;
const pic3 = 608;
const pic4 = 912;
// arrows
const nextArrow = document.querySelector(".next");
const previousArrow = document.querySelector(".previous");
// the first picture. Used for it's width
const picture = document.querySelector("img");
const pictureWidth = picture.clientWidth;
// contains all 4 pictures
const picsCont = document.querySelector(".pictures-container");
// the current scroll position of the image container
let scrollPos = picsCont.scrollLeft;
// set's timer to run slideshow
const intervalFn = setInterval(() => clickScroll("next"), 5000);
// circle indicators
const indicators = [...document.querySelectorAll(".indicator")];

// EVENT LISTENERS
// indicator listeners
indicators.map((indicator) =>
  indicator.addEventListener("click", clickedIndicator)
);
// arrow listener
nextArrow.addEventListener("click", () => {
  clickScroll("next");
});
// arrow listener
previousArrow.addEventListener("click", () => {
  clickScroll("previous");
});

// FUNCTIONS
// checks the scroll position and then passes the right indicator to changeIndicator()
function matchIndicatorWithScroll() {
  switch (scrollPos) {
    case pic1:
      changeIndicator(indicators[0]);
      break;
    case pic2:
      changeIndicator(indicators[1]);
      break;
    case pic3:
      changeIndicator(indicators[2]);
      break;
    case pic4:
      changeIndicator(indicators[3]);
  }
}

// adds the 'selected' class to the right indicator
function changeIndicator(indicator) {
  indicators.map((indicator) => indicator.classList.remove("selected"));
  indicator.classList.add("selected");
}

// changes the scroll position based on the clicked indicator
function clickedIndicator(e) {
  changeIndicator(e.target);
  let currentCircle = e.target;
  scrollPos = currentCircle.dataset.id * 304;
  picsCont.scrollLeft = scrollPos;
}

// scrolls the container based on the arrow clicked
function clickScroll(type) {
  let nextOrPrevious = type;
  type == "next" ? next() : previous();
  matchIndicatorWithScroll();
}

function next() {
  scrollPos >= picsCont.scrollLeftMax - 4 ? resetToFirst() : goNext();
}

// scrolls to next pic and updates indicator
function goNext() {
  scrollPos += pictureWidth + 4;
  picsCont.scrollLeft = scrollPos;
  matchIndicatorWithScroll();
}

// resets the scroll position to 0 if next is clicked on the last pic
function resetToFirst() {
  scrollPos = 0;
  picsCont.scrollLeft = scrollPos;
  matchIndicatorWithScroll();
}

//checks the scroll position and runs appropriate fn
function previous() {
  scrollPos == pic1 ? resetToLast() : goPrevious();
}

// scrolls to previous pic and updates indicator
function goPrevious() {
  scrollPos -= pictureWidth + 4;
  picsCont.scrollLeft = scrollPos;
  matchIndicatorWithScroll();
}

// resets the scroll position to last pic if previous is clicked on the first pic
function resetToLast() {
  scrollPos = pic4;
  picsCont.scrollLeft = scrollPos;
  matchIndicatorWithScroll();
}
