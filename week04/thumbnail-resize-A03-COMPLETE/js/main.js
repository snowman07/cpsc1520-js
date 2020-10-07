// When a gallery thumbnail size button is clicked, the corresponding size class
// should be added to the div.thumbnails element.  This will apply the corresponding
// CSS rule to  modify the display the of hte thumbnail images.  In addition to this,
// the clicked button should be made active (i.e. add the active class).

let buttonSizeList = document.querySelector(".thumbnail-sizes");

const resizeHandler = function(event) {
  console.log("resizeHandler executed");
  console.log(event.target);
  // checked that our target is not the list.
  console.log("tagName below.")
  console.log(event.target.tagName);
  if (event.target.tagName !== "LI") {
    return;
  }
  // setting the button that's active.
  let activeItem = document.querySelector("li.active")
  activeItem.classList.remove("active");

  event.target.classList.add("active");
  // we're done setting the button that's active.

  // 1. Based on which button i click.
  // 2. change the second class of the thumnail object.

  let thumbnails = document.querySelector(".thumbnails");
  //remove all possible size options.
  thumbnails.classList.remove("sm", "md", "lg");


  if (event.target.classList.contains("thumbnails-sm")) {
    thumbnails.classList.add("sm");
  } else if (event.target.classList.contains("thumbnails-md")) {
    thumbnails.classList.add("md");
  } else if (event.target.classList.contains("thumbnails-lg")) {
    thumbnails.classList.add("lg");
  } else {
    alert("Could not handle that click.");
  }

}

buttonSizeList.addEventListener("mouseover", resizeHandler);