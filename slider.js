function clickScroll(type) {
  let nextOrPrevious = type;
  if (picsCont.scrollLeft == picsCont.scrollLeftMax) {
    console.log("before", picsCont.scrollLeft);
    picsCont.scrollLeft = 0;
  }

  if (nextOrPrevious == "next") {
    picsCont.scrollLeft += pictureWidth + 4;
  } else {
    picsCont.scrollLeft -= pictureWidth + 4;
  }
}

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const picture = document.querySelector("img");
const pictureWidth = picture.clientWidth;
const picsCont = document.querySelector(".pictures-container");

next.addEventListener("click", () => clickScroll("next"));
previous.addEventListener("click", () => clickScroll("previous"));

// THIS CODE IS FOR THE INDICATORS. IT ALL WORKS EXCEPT FOR MATCHING INDICATOR WITH ARROW CLICK
//const intervalFn = setInterval(() => clickScroll("next"), 5000);

//function changeIndicator(indicator) {
//  indicators.map((indicator) => indicator.classList.remove("selected"));
//  indicator.classList.add("selected");
//}
//
//function clickedIndicator(e) {
//  changeIndicator(e.target);
//  let currentCircle = e.target;
//  picsCont.scrollLeft = currentCircle.dataset.id * 504;
//}

//const indicators = [...document.querySelectorAll(".indicator")];
//indicators.map((indicator) =>
//  indicator.addEventListener("click", clickedIndicator)
//);
