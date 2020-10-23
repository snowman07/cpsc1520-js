
// get all the posts
let posts = document.querySelectorAll('.post');
let mentions = document.querySelectorAll('.mention')
// convert the posts to a post array as 
// filter map and reduce, are only available
let postsArray = Array.from(posts);
let mentionsArray = Array.from(mentions);

// map applies a function to each 
// Below apply the style to each post
const stylePostText = (post)=> {
	post.style = "font-family: Verdana;";
}
postsArray.map(stylePostText);

// reduce will reduce an array to a specific value (allUniqueMembers) here
// Below will add a member to an array if they're not in it.
let allUniqueMembers = mentionsArray.reduce(function(allMembers, currentMention) {
    // 
    let currentMentionMembers = currentMention.innerText.split(" ");
    currentMentionMembers.forEach((member)=> {
    	if (!allMembers.includes(member)) {
    		allMembers.push(member)
    	}
    });
    return allMembers;
}, []); // the second parameter is the initial value for the total (members) in this scenario


let allMembersDisplay = document.querySelector(".all-members")
allMembersDisplay.innerHTML = "<h3>All Unique Members in the posts</h3><ul>";
allUniqueMembers.forEach((member)=> {
	allMembersDisplay.innerHTML += "<li>"+ member +"</li>";
});
allMembersDisplay.innerHTML += "</ul>";


// below we are going to loop through the posts and only select
// the posts that include 
let danPostMentions = postsArray.filter(function (post) {
    // below we are selecting the first html child of my post.
    let mentions = post.children[1].innerText;
    if (mentions.includes("@dan")) {
        return true;
    }
    return false;
});

let danMentionsDisplay = document.querySelector('.dan-mentions');
let mentionText = "<h3>Dan is mentioned in the post</h3> <br/>";

danPostMentions.map((post) =>{
    mentionText += post.children[0].innerText + "<br/>"
});

danMentionsDisplay.innerHTML = "<h4></h4>" +mentionText;