// your js here...
let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;

document.querySelector(".carousel>img").src = "images/" + images[currentImg];

document.querySelector(".carousel").addEventListener("click", function (evt) {
    let target = evt.target;
    if (target.classList.contains("control")) {
        //console.log("control clicked...");
        if (target.classList.contains("next")){
            // move to the next index in the array
            currentImg += 1;
            //continue;
        } else if (target.classList.contains("prev")) {
            //move to the previous index in the array
            currentImg -= 1;
            //continue;
            
        }
        //continue;
        // display the new current image
        document.querySelector(".carousel>img").src = "images/" + images[currentImg];
        //break;
        //continue;
    }
});