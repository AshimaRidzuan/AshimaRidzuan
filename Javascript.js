const dateElement = document.getElementById("currentDate");

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const today = new Date();
dateElement.textContent = today.toLocaleDateString(undefined, options);