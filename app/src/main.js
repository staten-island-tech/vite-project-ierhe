import './style.css'

setupCounter(document.querySelector('#counter'))

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("whitemode")) {
    document.body.classList.add("darkmode");
    document.body.classList.remove("whitemode");
  } else {
    document.body.classList.add("whitemode");
    document.body.classList.remove("darkmode");
  }
});