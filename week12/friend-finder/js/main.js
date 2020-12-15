// Your code here...


let friendsClick = document.querySelector(".friends");
let homeClick = document.querySelector(".home");
let friends = [];
let friendElements = [];


friendsClick.addEventListener("click", function(e) {
    fetch("./friend-finder/friends/friends.json")
        .then((response) => response.json())
        .then((data) => {
            friends = [...data];
            // function here

        })
        .catch((error) => console.warn(error));

    const createPostElements = () => {

    }

    const updatePostDisplay = () => {
        
    }
})