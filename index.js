// Like Button Functionality
document.getElementById("btnLike1").addEventListener("click", function() {
  let count = parseInt(document.getElementById("countLike1").textContent);
  document.getElementById("countLike1").textContent = count + 1;
});

// Dislike Button Functionality
document.getElementById("btnDislike1").addEventListener("click", function() {
  let count = parseInt(document.getElementById("countDislike1").textContent);
  document.getElementById("countDislike1").textContent = count + 1;
});

// Submit Button Functionality
document.getElementById("btnSubmit").addEventListener("click", function() {
  let comment = document.getElementById("comment").value;
  if (comment.trim() !== "") {
    let commentElement = document.createElement("p");
    commentElement.textContent = comment;
    document.getElementById("comments").appendChild(commentElement);
    document.getElementById("comment").value = "";
  }
});
