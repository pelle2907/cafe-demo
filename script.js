function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");

  const nav = document.getElementById("navMenu");
  if (nav) {
    nav.classList.remove("show");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("show");
}

function sendReservation(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  alert("Danke " + name + "! Deine Reservierungsanfrage wurde vorbereitet.");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("people").value = "";
  document.getElementById("message").value = "";
}