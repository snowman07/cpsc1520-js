
const SEARCHBAR = document.querySelector("#filter"); //filter functionality
SEARCHBAR.addEventListener("input", onSearchItems); // Add an input event listener to the input

function onSearchItems(e){
    const SEARCHTAG = e.currentTarget.value.trim().toLowerCase();
    searchForMatchingItems(SEARCHTAG);
}

function searchForMatchingItems(SEARCHTAG){
    // get all the thumb-display and the tags of it
    let thumbDisplay = document.querySelectorAll(".thumb-display");
    //let tags = document.querySelectorAll(".tags");      //search all tags
    //// convert it into Array
    let thumbDisplayArray = Array.from(thumbDisplay);
    //let tagsArray = Array.from(tags);
    thumbDisplayArray.filter((thumbdisplay) => { //thumbdisplay is a callback function
        let resetShow = document.querySelector("a.reset"); // variable for reset
        if(thumbdisplay.children[1].innerText.includes(SEARCHTAG)){ // if in the SEARCHTAG (filter)
            // if (SEARCHTAG !== ""){
            //     //resetShow.classList.add("hidden");
            //     resetShow.style.visibility = "visible"; 
            //     //resetShow.style.visibility = "hidden"; 
            // } else {
            //     resetShow.style.visibility = "hidden"; 
            //     //resetShow.style.visibility = "visible"; 
            // }
            //------
            thumbdisplay.classList.add("hidden");
            resetShow.style.visibility = "hidden"; 
            //resetShow.classList.add("hidden");
            //resetShow.style.display = "visible"; // THIS IS THE ANSWER BABY!!!!! 
            if(thumbdisplay.classList.contains("hidden")){
                thumbdisplay.classList.remove("hidden");
                //resetShow.style.visibility = "visible"; // THIS IS THE ANSWER BABY!!!!!
                //resetShow.classList.remove("hidden");
                //resetShow.style.visibility = "visible"; // THIS IS THE ANSWER BABY!!!!!
            } 
        } else {
            thumbdisplay.classList.add("hidden");
            resetShow.style.visibility = "visible"; // THIS IS THE ANSWER BABY!!!!!
        }     
    });
}

function resetTheDisplay(SEARCHTAG) {
    let resetShow = document.querySelector("a.reset");
    if(SEARCHBAR.contains(SEARCHTAG)){
        resetShow.classList.add("hidden");
    }
}


document.querySelector("a.reset").addEventListener("click", resetTheDisplay);
function resetTheDisplay(){
    // thumbDisplayArray.forEach(function(tag, index){
    //     if( tag.classList.contains("hidden")){
    //         tag.classList.remove("hidden")

    //     }
    // })
    //SEARCHTAG= "";
    console.log("click");
    if (SEARCHBAR === ""){
        thumbDisplayArray.classList.add("hidden");;
    }

}









