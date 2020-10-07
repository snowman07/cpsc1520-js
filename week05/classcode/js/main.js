/*
1. Select form, add event listener + handler
2. Prevent the form from submitting
3. Validate the information in the form (make sure its not empty)
4. Take the value from the form and add it to the list
*/


//Selecting the form
let vgForm = document.querySelector("form");
let errors = document.querySelector("div.error");


const isValidGame = function(gameName) {
    if (gameName.trim().length === 0) {
        return false;
    }
    return true;
}

const displayError = function(errorMessage) {
    errors.innerHTML = errorMessage;
}

const clearError = function() {
    errors.innerHTML = "";
}

const addToVideoGameList = function(gameName) {
    let videoGameList = document.querySelector("ul");
    videoGameList.innerHTML += '<li>${gameName}</li>';
}


//adding the event listener + handler
vgForm.addEventListener("submit", function(event){
    // prevent the form from submitting
    event.preventDefault();
    //console.log("We've prevented this form from submitting");

    //select the input element (game refers to the name)
    let gameElement = vgForm.elements.game;
    // is the same as
    //let gameElement = event.target.elements.game
    //console.log(gameElement.value);

    if (isValidGame(gameElement.value)) {
        //valid
        clearError();
        addToVideoGameList(gameElement.value);
        gameElement.value = "";
    } else {
        //not valid
        displayError("You need to actually add the name of the game.");
    }
    
});

// make the error go away when the user starts typing
vgForm.elements.game.addEventListener("keyup", function() {
    if (isValidGame(vgForm.elements.game.value) ) {
      clearError();
    }
  });