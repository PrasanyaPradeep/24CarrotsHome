document.querySelector(".back-to-btn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var button = document.querySelector(".back-to-btn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

button.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
