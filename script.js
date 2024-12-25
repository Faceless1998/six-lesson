const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function setClock() {
  const now = new Date();

  const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360;
  const hourDeg = (hours / 12) * 360;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}
setInterval(setClock, 100);

setClock();

const hourMarkerContainer = document.querySelector(".hour-markers");
const minuteMarkersContainer = document.querySelector(".minute-markers");

for (let i = 0; i < 12; i++) {
  const marker = document.createElement("div");
  marker.classList.add("hour-marker");

  const hourText = document.createElement("span");

  const rotation = i * 30;

  marker.style.setProperty("--rotation", ` ${rotation}deg `);
  hourText.style.transform = `rotate(-${rotation}deg)`;

  if (i === 0) {
    hourText.textContent = "12";
  } else {
    hourText.textContent = i;
  }

  marker.appendChild(hourText);
  hourMarkerContainer.appendChild(marker);
}

for (let i = 0; i < 60; i++) {
  if (i % 5 !== 0) {
    const marker = document.createElement("div");
    marker.classList.add("minute-marker");
    const rotation = i * 6;
    marker.style.setProperty("--rotation", `${rotation}deg`);

    minuteMarkersContainer.appendChild(marker);
  }
}
