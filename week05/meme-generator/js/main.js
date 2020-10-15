// Enter your JavaScript for the solution here...

// //targetting the form element
// const memeForm = document.querySelector(".meme-form");

// //adding an event listener to the form 
// memeForm.addEventListener("submit", function(event) {
//     //console.log("FOrm submitted");  
//     event.preventDefault();

//     //creating the canvas element to put our img background
//     let topText = document.getElementById("meme-top-text");
// });

//=========================
//targetting the image
const memeImage = document.querySelector("#meme-image")
memeImage.addEventListener("change", function(e){
    const selectedImage = e.currentTarget.options[e.currentTarget.selectedIndex];
    //call and display the target image
    updateImage(e.currentTarget.value)
})

// Function that updates the image
// which image
function updateImage(whichImage){
    const memeDisplay = document.querySelector(".meme-display img")
    const path = '/img/${whichImage}.png';    //
    memeDisplay.src = path;
}