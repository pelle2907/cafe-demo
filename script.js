const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".desktop-nav button, .mobile-nav button");

function showPage(pageId) {
  const targetPage = document.getElementById(pageId);

  if (!targetPage) {
    console.error("Seite nicht gefunden:", pageId);
    return;
  }

  pages.forEach(function(page) {
    page.classList.add("hidden");
  });

  targetPage.classList.remove("hidden");

  updateActiveNavigation(pageId);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function updateActiveNavigation(pageId) {
  navButtons.forEach(function(button) {
    button.classList.remove("active-nav");
  });

  navButtons.forEach(function(button) {
    const clickValue = button.getAttribute("onclick");

    if (clickValue && clickValue.includes("'" + pageId + "'")) {
      button.classList.add("active-nav");
    }
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

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const date = dateInput.value;
  const time = timeInput.value;
  const people = peopleInput.value;
  const message = messageInput.value.trim();

  if (!name || !email || !date || !time || !people) {
    alert("Bitte fülle alle Pflichtfelder aus.");
    return;
  }

  const reservationText =
    "Reservierungsanfrage\n\n" +
    "Name: " + name + "\n" +
    "E-Mail: " + email + "\n" +
    "Datum: " + date + "\n" +
    "Uhrzeit: " + time + "\n" +
    "Personen: " + people + "\n" +
    "Nachricht: " + (message || "Keine Nachricht");

  console.log(reservationText);

  alert("Danke " + name + "! Deine Reservierungsanfrage wurde vorbereitet.");

  nameInput.value = "";
  emailInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
  peopleInput.value = "";
  messageInput.value = "";

  showPage("home");
}

document.addEventListener("DOMContentLoaded", function() {
  showPage("home");
});