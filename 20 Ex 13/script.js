function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // finish this function
  let viewStr;
  if (views < 1000) {
    viewStr = views
  } 
  else if (views >= 1000000) {
    viewStr = views / 1000000 + "M";
  }
  else{
    viewStr = views / 1000 + "k";
  }

  let html = `<div class="card">
        <div class="image">
          <img
            src="${thumbnail}"
            alt=""
          />
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h3>${title}</h3>
          <p>${cName}• ${viewStr} views • ${monthsOld} months ago</p>
        </div>
      </div>`;

      document.querySelector(".container").innerHTML += html
}
createCard(
  "Introdunction to BackEnd | SigmaWebDev","codeWithHarry",56000,7,"31:22","https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDUUhJPpVHG3CuE1RjKX3Z3q4gF2Q",
);
createCard(
  "Introdunction to BackEnd | SigmaWebDev","codeWithHarry",56000,7,"31:22","https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDUUhJPpVHG3CuE1RjKX3Z3q4gF2Q",
);



