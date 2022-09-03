const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((comments) => renderComment(comments))
    .catch((err) => alert(err));
};

const renderComment = (comments) => {
  let html = "";
  comments.map((comment) => {
    let singlecomment = `
      <div class="wrapper">
        <h3>${comment.name}</h3>
        <p>${comment.email}</p>
        <span>${comment.body}</span>
      </div>`;
    html += singlecomment;
  });
  const container = document.querySelector(".container");
  container.innerHTML = html;
};
fetchData();
