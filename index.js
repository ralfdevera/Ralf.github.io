// Image 1
const btnLike1 = document.getElementById("btnLike1");
const countLikes1 = document.getElementById("countLikes1");
const btnDislike1 = document.getElementById("btnDislike1");
const countDislikes1 = document.getElementById("countDislikes1");
const btnHaha1 = document.getElementById("btnHaha1");
const countHaha1 = document.getElementById("countHaha1");
const btnHeart1 = document.getElementById("btnHeart1");
const countHeart1 = document.getElementById("countHeart1");

btnLike1.addEventListener("click", () => {
    countLikes1.textContent = parseInt(countLikes1.textContent) + 1;
});

btnDislike1.addEventListener("click", () => {
    countDislikes1.textContent = parseInt(countDislikes1.textContent) + 1;
});

btnHaha1.addEventListener("click", () => {
    countHaha1.textContent = parseInt(countHaha1.textContent) + 1;
});

btnHeart1.addEventListener("click", () => {
    countHeart1.textContent = parseInt(countHeart1.textContent) + 1;
});

// Image 2 (Similar to Image 1, just change the IDs)

function saveComment(pictureNumber) {
    const commentInput = document.getElementById(`comment${pictureNumber}`);
    const commentSection = document.getElementById(`commentSection${pictureNumber}`);
    
    const comment = commentInput.value;
    
    // Check if the comment is not empty
    if (comment.trim() !== "") {
        const newComment = document.createElement("div");
        newComment.textContent = comment;
        commentSection.appendChild(newComment);
        
        // Clear the input field after saving the comment
        commentInput.value = "";
    }
}
