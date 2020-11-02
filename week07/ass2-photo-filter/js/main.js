// Enter your JavaScript for the solution here...

// //===================================================
// window.addEventListener('load', function(e){
//     const FILTERDISPLAY = document.querySelector("#filter.frm-control"); //filter functionality
//     const TAGS = document.querySelectorAll(".tags"); //all tags

//     // Add an input event listener to the input
//     FILTERDISPLAY.addEventListener("input", onSearchItems);

//     function onSearchItems(e){
//         const SEARCHTERM = e.currentTarget.value.trim().toLowerCase()

//         if(SEARCHTERM === "") {
//             resetTheDisplay();
//         } else {
//             // search through the array looking for matches
//             searchForMatchingItems(SEARCHTERM);
//         }
//     }

//     function searchForMatchingItems(SEARCHTERM){
//         TAGS.forEach(function(tags,index) {
//             const ITEM = tags.textContent.trim().toLowerCase();
//                 if(ITEM.includes(SEARCHTERM)){
//                     tags.classList.add('animate__fadeIn'); //
//                     if(tags.classList.contains('animate__fadeOut')){ //
//                         tags.classList.remove('animate__fadeOut') //
//                     } //
//                 } else {
//                     tags.classList.add('animate__fadeOut'); //
//                 }
//         })
//     }

//     function resetTheDisplay() {
//         TAGS.forEach(function(tags, index) {
//             if(tags.classList.contains('animate__fadeOut')){
//                 tags.classList.remove('animate__fadeOut');
//             }
//         })
//     }

// })
// //===================================================



// search here

//////// Fill out the stats part using map filter and reduce.

// get all the thumb-display and the tags of it
let thumbDisplay = document.querySelectorAll(".thumb-display");
let tags = document.querySelectorAll(".tags");
// convert it into Array
let thumbDisplayArray = Array.from(thumbDisplay);
let tagsArray = Array.from(tags);

//filter the thumb-display for a given tag
let tag = "#mountain"; //CHANGE THIS TO WHAT USER INPUT IN FILTER // this is where trev go to on filter thingy

//filter thumbDisplayArray using children
let thumbDisplayWithTags = thumbDisplayArray.filter((thumbdisplay) => {
    // console.log(thumb-display);
    // console.log(thumb-display.children[1].innerText);
    // console.log("------");
    if(thumbdisplay.children[1].innerText.includes(tag)){ // condition must be from user input in filter
        return true; // this is where trev go to
    }
    return false;
});
console.log(thumbDisplayWithTags);
