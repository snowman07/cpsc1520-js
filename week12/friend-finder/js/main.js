// Your code here...

let friends = [];
let friendElements = [];

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