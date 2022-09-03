const fetchData = async () => {
  try {
    let response = await fetch("https://ghibliapi.herokuapp.com/films");
    let data = await response.json();
    displayData(data)
  } 
  catch (error) {
    console.log(error);
  }
};




// const fetchData = () => {
//     fetch("https://ghibliapi.herokuapp.com/films")
//       .then((response) => response.json())
//       .then((data) => displayData(data));
//   };
const displayData = (data) => {
  let html = "";
  data.map((item) => {
    let htmlSegment = `<div class="wrapper">
   
   <img src=${item.image} alt="">
   <div class="movie-info">
   <h2>${item.title}</h2>
   <h3>${item.director}</h3>
   <h3>${item.producer}</h3>
   <p>${item.description}</p>
   </div>
    </div>`;
    html += htmlSegment;
  });
  const container = document.querySelector(".container");
  container.innerHTML = html;
};
fetchData();
