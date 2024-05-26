const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")

function clickLike1(){
  let totalLikes = parseInt(countLike1.value) + 1
  countLike1.textContent = totalLikes.toString()
}
btnLike1.addEventListener("click",clickLike1)

function clickLike2(){
  let totalLikes = parseInt(countLike2.value) + 1
  countLike2.textContent = totalLikes.toString()
}
btnLike2.addEventListener("click",clickLike2)
document.getElementById("btnSubmit").addEventListener("click", function() {
    var commentText = document.getElementById("comment").value;
    var commentNode = document.createElement("p");
    commentNode.innerText = commentText;
    document.getElementById("comments").appendChild(commentNode);
    document.getElementById("comment").value = ""; // Clear the input field after submission
});
