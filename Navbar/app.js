const sidebar = document.querySelector(".sidebar");
const openBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});