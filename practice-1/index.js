const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => renderUser(users))
    .catch((err) => alert(err));
};

const renderUser = (users) => {
  let html = "";
  users.map((user) => {
    let singleUser = `<div class='user'>
          <h3> Name : ${user.name}</h3>
          <h4> Username : ${user.username}</h4>
          <h4> Email : ${user.email}</h4>
          <p> City : ${user.address.city}</p>
        </div>`;

    html += singleUser;
  });
  let container = document.querySelector(".container");
  container.innerHTML = html;
};

fetchData();
