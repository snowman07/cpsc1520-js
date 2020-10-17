document.addEventListener("DOMContentLoaded", function(){
    
    // variable to target the form
    let memeForm = document.querySelector(".meme-form");
    // variable to target where meme will be displayed
    let memeDisplay = document.querySelector(".meme-display img");
    // variable to target the images
    const MEMEIMAGE = document.querySelector("#meme-image")

    // Function for image selection
    MEMEIMAGE.addEventListener("change", function(e){
        const selectedImage = e.currentTarget.options[e.currentTarget.selectedIndex];
        //call and display the target image
        updateImage(e.currentTarget.value)
    })

    // Function targetting list of images from other folder
    function updateImage(whichImage){
        memeDisplay = document.querySelector(".meme-display img")
        const PATH = `img/${whichImage}.png` // to access the img folder
        memeDisplay.src = PATH;
        memeDisplay.alt = PATH;
    }
    
    // Event to SUBMIT/GENERATE the form
    memeForm.addEventListener("submit", function(event){ 
        //console.log("Forms submitted");
        let error = document.querySelector(".error"); // to display error message
        let memeForm = event.target; // need to target the form inside submit event
        let topText = memeForm.elements.memeTopText; // to get the value of TOPTEXT
        let bottomText = memeForm.elements.memeBottomText; // to get the value of BOTTOMTEXT     

            // IMAGE VALIDATION, doesnt work!!!!!!!!
            if (MEMEIMAGE == memeDisplay) {
                error.innerHTML = "Image isnt allowed to use";
            }

            // TEXT VALIDATION
            if (topText.value.trim() == ""){
                error.innerHTML = "Top text cannot be blank";
                topText.focus(); // focuses on particular input
            } else if (bottomText.value.trim() == ""){
                error.innerHTML = "Bottom text cannot be blank";
                bottomText.focus(); // focuses on particular input
            } else { // if TOPTEXT and BOTTOMTEXT have value
                document.querySelector("p.top-text").innerHTML = topText.value; //to display the input
                topText.value = ""; // remove the text after submit/generate
                document.querySelector("p.bottom-text").innerHTML = bottomText.value; //to display the input
                bottomText.value = ""; // remove the text after submit/generate
                error.innerHTML = ""; //remove error if validation met
            }  
        event.preventDefault();      
    });

    // Function for RESET
    function resetForm(event) {
        memeDisplay.innerHTML = memeDisplay; // suppose to reset the image,but doesnt work!!!!
        document.querySelector("p.top-text").innerHTML = "";
        document.querySelector("p.bottom-text").innerHTML = "";
    }
    // Event calling function RESET
    memeForm.addEventListener("reset", resetForm);
});

