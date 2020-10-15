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

//=========FORM ELEMENTS================
//=========1. SELECT THE TARGET ELEMENT
// target the form
const memeForm = document.querySelector(".meme-form");
// target where meme will be displayed
const memeDisplay = document.querySelector(".meme-display img");

//========2. CREATE THE EVENT LISTENER FUNCTION
//function to display image when user submit or generate the button
memeForm.addEventListener("submit", function(event){
    event.preventDefault();

    //targetting list of images from other folder
    const memeImage = document.querySelector("#meme-image")
    memeImage.addEventListener("change", function(e){
        const selectedImage = e.currentTarget.options[e.currentTarget.selectedIndex];
        //call and display the target image
        updateImage(e.currentTarget.value)
    })
    //updateImage(memeImage);

    // Function that updates the image
    function updateImage(whichImage){
        const memeDisplay = document.querySelector(".meme-display img")
        const path = `img/${whichImage}.png` // to access the img folder
        memeDisplay.src = path;
    }
    
});
// //===============GENERATE BTN============
// const generateBtn = document.querySelector("input[type=submit]");

// // // this is for testing on console
// // function generateBtnClick() {
// //     console.log("You click generate button");
// // }

// generateBtn.addEventListener("click", updateImage);
