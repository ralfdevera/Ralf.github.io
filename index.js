// Function to handle like button click
document.getElementById('btnLike1').addEventListener('click', function() {
  let count = parseInt(document.getElementById('countLike1').textContent);
  document.getElementById('countLike1').textContent = count + 1;
});

// Function to handle dislike button click
document.getElementById('btnDislike1').addEventListener('click', function() {
  let count = parseInt(document.getElementById('countDislike1').textContent);
  document.getElementById('countDislike1').textContent = count + 1;
});

// Function to handle comment submission
document.getElementById('submitComment1').addEventListener('click', function() {
  let comment = document.getElementById('comment1').value;
  let commentSection = document.getElementById('commentSection1');
  commentSection.innerHTML += `<p>${comment}</p>`;
});
