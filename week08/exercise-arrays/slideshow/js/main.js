// your js here...
let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;

document.querySelector(".carousel>img").src = "images/" + images[0];

document.querySelector(".carousel").addEventListener("click", function (evt) {
    let target = evt.target;
    
    if (target.classList.contains("control")) {
        //console.log("control clicked...");
        if (target.classList.contains("next")){
            // move to the next index in the array
            //currentImg += 1;

            // ternary operator. use this instead of if else below
            //currentImg = currentImg === 2 ? 0 : currentImg+1;
            if (currentImg === 2) {
                currentImg = 0;
            } else {
                currentImg+=1;
            }
        } else if (target.classList.contains("prev")) {
            //move to the previous index in the array
            //currentImg -= 1; 
            
            // ternary operator. use this instead of if else below
            //currentImg = currentImg === 0 ? 2 : currentImg-1;  

            if (currentImg === 0) {
                currentImg = 2;
            } else {
                currentImg-=1;
            }

        }
        //console.log(currentImg); // to check current array position
        document.querySelector(".carousel>img").src = "images/" + images[currentImg]; 
    }
});