function hideAllScreens() {
  document.querySelector("#content").classList.add("hide");
  document.querySelector("#presentationskort").classList.add("hide");
  document.querySelector("#studiestartsprov").classList.add("hide");
  document.querySelector("#stockholm").classList.add("hide");
  document.querySelector("#spel").classList.add("hide");
  document.querySelector("#passionsite").classList.add("hide");
  document.querySelector("#verksamhetssite").classList.add("hide");
}

window.addEventListener("load", start);

function start() {
  console.log("startcontent");
  hideAllScreens();
  document.querySelector("#content").classList.remove("hide");

  document.querySelector("#box1").addEventListener("click", clickBox1);
  document.querySelector("#box2").addEventListener("click", clickBox2);
  document.querySelector("#box3").addEventListener("click", clickBox3);
  document.querySelector("#box4").addEventListener("click", clickBox4);
  document.querySelector("#box5").addEventListener("click", clickBox5);
  document.querySelector("#box6").addEventListener("click", clickBox6);
}

function clickBox1() {
  console.log("presentationskort");
  hideAllScreens();
  document.querySelector("#presentationskort").classList.remove("hide");
  document.querySelector("#close1").addEventListener("click", start);
}

function clickBox2() {
  console.log("studiestartsprov");
  hideAllScreens();
  document.querySelector("#studiestartsprov").classList.remove("hide");
  document.querySelector("#close2").addEventListener("click", start);
}

function clickBox3() {
  console.log("stockholm");
  hideAllScreens();
  document.querySelector("#stockholm").classList.remove("hide");
  document.querySelector("#close3").addEventListener("click", start);
}

function clickBox4() {
  console.log("spel");
  hideAllScreens();
  document.querySelector("#spel").classList.remove("hide");
  document.querySelector("#close4").addEventListener("click", start);
}
function clickBox5() {
  console.log("passionsite");
  hideAllScreens();
  document.querySelector("#passionsite").classList.remove("hide");
  document.querySelector("#close5").addEventListener("click", start);
}

function clickBox6() {
  console.log("verksamhetssite");
  hideAllScreens();
  document.querySelector("#verksamhetssite").classList.remove("hide");
  document.querySelector("#close6").addEventListener("click", start);
}
