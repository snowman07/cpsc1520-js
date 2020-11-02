// Enter your JavaScript for the solution here...

window.addEventListener('load', function(e){
    const FILTERDISPLAY = document.querySelector("#filter"); //filter functionality
    const TAGS = document.querySelectorAll(".tags"); //all tags

    // Add an input event listener to the input
    FILTERDISPLAY.addEventListener("input", onSearchItems);

    function onSearchItems(e){
        const SEARCHTERM = e.currentTarget.value.trim().toLowerCase()

        if(SEARCHTERM === "") {
            resetTheDisplay();
        } else {
            // search through the array looking for matches
            searchForMatchingItems(SEARCHTERM);
        }
    }

    function searchForMatchingItems(SEARCHTERM){
        TAGS.forEach(function(tags,index) {
            const ITEM = tags.textContent.trim().toLowerCase();
                if(ITEM.includes(SEARCHTERM)){
                    tags.classList.add('animate__fadeIn'); //
                    if(tags.classList.contains('animate__fadeOut')){ //
                        tags.classList.remove('animate__fadeOut') //
                    } //
                } else {
                    tags.classList.add('animate__fadeOut'); //
                }
        })
    }

    function resetTheDisplay() {
        TAGS.forEach(function(tags, index) {
            if(tags.classList.contains('animate__fadeOut')){
                tags.classList.remove('animate__fadeOut');
            }
        })
    }

})