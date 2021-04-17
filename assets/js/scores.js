var highScoreEl = document.querySelector("#high-scorelist");
var clearHighScoreEl = document.querySelector(".clear-data");

function displayHighScores() {
  //take data from storage
  var storageData = JSON.parse(localStorage.getItem("userScores")) || [];
  console.log(storageData);

  //sort it a. -b. () in ascending order b. -a. in descending order
  storageData.sort(function (a, b) {
    return b.userScore - a.userScore;
  });
  console.log(storageData);
  //create lis for each entry and append it to //highScoreEl;
  highScoreEl.setAttribute(
    "style",
    "background-color:white; font-size:1rem;margin-top:2rem"
  );
  storageData.forEach(function (item) {
    var liList = document.createElement("li");
    liList.textContent = item.initials + " - " + item.userScore;
    console.log(liList.textContent);
    highScoreEl.appendChild(liList);
  });
  //display it on page
}

function clearScores() {
  console.log("in remove items");
  localStorage.clear();
  // localStorage.removeItem("userScore");
  window.location.reload();
}

clearHighScoreEl.addEventListener("click", clearScores);

displayHighScores();
