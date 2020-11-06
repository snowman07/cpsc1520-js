

//////PART A - user input search here
const searchBar = document.querySelector("#filter"); //filter functionality
//const tags = document.querySelectorAll(".tags");      //search all tags

///// PART B - declare search and reset function here

// Add an input event listener to the input
searchBar.addEventListener("input", onSearchItems);
//-----
function onSearchItems(e){
    const searchTerm = e.currentTarget.value.trim().toLowerCase();

    // if(searchTerm === ""){  // get PART D - function for reset
    //     resetTheDisplay();
    // } else {    // get PART C - function for search
    //     searchForMatchingItems(searchTerm);
    // }

    searchForMatchingItems(searchTerm);
}
//-----


//searchBar.addEventListener("input", searchForMatchingItems);

///// PART C - function for search

function searchForMatchingItems(searchTerm){
    // get all the thumb-display and the tags of it
    let thumbDisplay = document.querySelectorAll(".thumb-display");
    //let tags = document.querySelectorAll(".tags");
    let tags = document.querySelectorAll(".tags");      //search all tags
    
    //// convert it into Array
    let thumbDisplayArray = Array.from(thumbDisplay);
    let tagsArray = Array.from(tags);

    //filter thumbDisplayArray using children
    let thumbDisplayWithTags = thumbDisplayArray.filter((thumbdisplay) => { //thumbdisplay is a callback function
    // console.log(thumb-display);
    // console.log(thumb-display.children[1].innerText);
    // console.log("------");
    
        if(!thumbdisplay.children[1].innerText.includes(searchTerm)){ // if NOT in the searchTerm (filter)
            // image will not stay
            //return true; 
            //console.log("capt image");
            //console.log(thumbdisplay);
            thumbdisplay.style.display = "none"; // THIS IS THE ANSWER BABY!!!!!
            //if there's a text in the filter
            let resetShow = document.querySelector("a.reset");
            if (resetShow.classList.contains("hidden")){
                //resetShow.classList.add("hidden");
                resetShow.style.visibility = "visible"; // THIS IS THE ANSWER BABY!!!!!
            } else {
                resetShow.style.display = "none"; // THIS IS THE ANSWER BABY!!!!!
            }
            
        } 
        //else {
            // image will fadeout 
            //return false;   
            
        //}
        
    });

}

//// PART D - function for reset
function resetTheDisplay(searchTerm) {
    let resetShow = document.querySelector("a.reset");
    if(searchBar.contains(searchTerm)){
        resetShow.classList.add("hidden");
    }
}








