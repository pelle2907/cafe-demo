function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function sendReservation(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");
  const peopleInput = document.getElementById("people");
  const messageInput = document.getElementById("message");

  const name = nameInput.value;

  alert("Danke " + name + "! Deine Reservierungsanfrage wurde vorbereitet.");

  nameInput.value = "";
  emailInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
  peopleInput.value = "";
  messageInput.value = "";
}