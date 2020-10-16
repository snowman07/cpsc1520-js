document.addEventListener("DOMContentLoaded", function(){
    
    //=========1. SELECT THE TARGET ELEMENT
    // target the form
    const memeForm = document.querySelector(".meme-form");
    // target where meme will be displayed
    const memeDisplay = document.querySelector(".meme-display img");

    //========2. CREATE THE EVENT LISTENER FUNCTION
    //function to display image when user submit or generate the button



    const memeImage = document.querySelector("#meme-image")
    memeImage.addEventListener("change", function(e){
        const selectedImage = e.currentTarget.options[e.currentTarget.selectedIndex];
        //call and display the target image
        updateImage(e.currentTarget.value)
    })

    // Function targetting list of images from other folder
    function updateImage(whichImage){
        const memeDisplay = document.querySelector(".meme-display img")
        //memeDisplay;
        const path = `img/${whichImage}.png` // to access the img folder
        memeDisplay.src = path;
        memeDisplay.alt = path;
    }
    
    
    memeForm.addEventListener("submit", function(event){ 
        //console.log("Forms submitted");

        let memeForm = event.target; // need to target the form inside submit event
        let topText = memeForm.elements.memeTopText; // to get the value of TOPTEXT
        let bottomText = memeForm.elements.memeBottomText; // to get the value of BOTTOMTEXT     
        let error = document.querySelector(".error"); // to display error message

        // TEXT VALIDATION
        // if (topText.value.trim() == "") {
        //     error.innerHTML = "Top text cannot be blank";
        // } else if (bottomText.value.trim() == ""){
        //     error.innerHTML = "Bottom text cannot be blank";
        // } else if ((topText.value == "") || (bottomText.value == "")) {
        //     error.innerHTML = "Top and Bottom text cannot be blank";
        // } 

        if ((topText.value == "") || (bottomText.value == "")) {
            error.innerHTML = "Top and Bottom text cannot be blank";
        } else { // if TOPTEXT and BOTTOMTEXT have value
            document.querySelector("p.top-text").innerHTML = topText.value; //to display the input
            topText.value = ""; // remove the text after submit/generate
            document.querySelector("p.bottom-text").innerHTML = bottomText.value; //to display the input
            bottomText.value = ""; // remove the text after submit/generate
            error.innerHTML = ""; //remove error if validation met
        }   
        event.preventDefault();      
    });

});

