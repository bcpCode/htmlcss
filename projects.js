// projects.js
const projects = [
    //project1
  {
    id: "flight-ready",
    title: "Flight and Weather App (Flight Ready)",
    blurb: "An app that prepares you for both your flight and your destination’s weather, so you’re ready with the right info before you travel. The problem it solves: When we travel to different cities or countries, last-minute weather changes and flight issues can create unpleasant surprises. Flight Ready reduces that uncertainty by putting flight statistics and destination weather in one place.",
    description:
      "An app that prepares you for both your flight and your destination’s weather. It reduces uncertainty by putting flight statistics and destination weather in one place.",
    features: [
      "Secure authentication (Firebase Auth: Google & email/password)",
      "Saved destinations (like & revisit)",
      "Flight insights via Amadeus",
      "Weather at a glance via OpenWeather",
      "Smart search & caching: only request after 3–5 characters"
    ],
    tech: [
      "App: Dart / Flutter",
      "Backend & Auth: Firebase, Firebase Auth",
      "Flight data: Amadeus API",
      "Weather: OpenWeather API"
    ],
    challenge:
      "Staying within API limits for location/airport search. Added local cache and minimum 3–5-character queries to cut unnecessary calls and keep results fast.",
    images: [
      "flight-ready-assets/splashscreen.png",
      "flight-ready-assets/loginscreen.png",
      "flight-ready-assets/registerscreen.png",
      "flight-ready-assets/geolocatorscreen.png",
      "flight-ready-assets/weatherscreen.png",
      "flight-ready-assets/flightscreen.png",
      "flight-ready-assets/profilescreen.png",
      "flight-ready-assets/favoritiesscreen.png"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/bcpCode", newTab: true }
    ]
  },
  //project2

  {
    id: "snake-game",
    title: "Modern Snake Game",
    blurb: "A clean, modern spin on the classic snake game.",
    description:
      "Fast, minimal UI with smooth controls and a scoreboard. (Replace this text with your real description.)",
    features: [
      "Keyboard controls",
      "Score tracking",
      "Pause / restart"
    ],
    tech: ["HTML", "CSS", "JavaScript (Canvas)"],
    challenge:
      "Describe your biggest challenge here (e.g., collision detection, frame timing).",
    images: [],
    links: []
  },

  //project3
  {
    id: "Fitness Graph Tracking",
    title: "Fitness Graph Tracking",
    blurb: "A brief description of Fitness Graph Tracking.",
    description:
      "A detailed description of Fitness Graph Tracking.",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    tech: ["Tech 1", "Tech 2", "Tech 3"],
    challenge:
      "Describe your biggest challenge here (e.g., collision detection, frame timing).",
    images: [],
    links: []
  }
];

function esc(s){
  return String(s).replace(/[&<>"']/g, m => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m]));
}

function list(items, cls){
  if (!items || !items.length) return "";
  return `<ul class="${cls}">` + items.map(i => `<li>${esc(i)}</li>`).join("") + `</ul>`;
}

function imagesList(imgs, title){
  if (!imgs || !imgs.length) return "";
  return `
    <ul class="images-links-list">
      ${imgs.map((src, i) => `
        <li>
          <a href="${esc(src)}" target="_blank" rel="noopener">
            <img src="${esc(src)}" alt="${esc(title)} screenshot ${i+1}">
          </a>
        </li>`).join("")}
    </ul>`;
}

function externalLinks(links){
  if (!links || !links.length) return "";
  return `
    <ul class="inline-links">
      ${links.map(l => `
        <li><a href="${esc(l.url)}"${l.newTab !== false ? ' target="_blank" rel="noopener"' : ''}>
          ${esc(l.label)}</a></li>`).join("")}
    </ul>`;
}

function projectCard(p){
  return `
    <div class="project-item">
      <h2 class="project-names">${esc(p.title)}</h2>
      <p class="project-descriptions">${esc(p.blurb)}</p>

      <h3 class="project-features-header">Key Features</h3>
      ${list(p.features, "key-features-list")}

      <h3 class="project-features-header">Tech stack & APIs</h3>
      ${list(p.tech, "key-features-list")}

      <h3 class="project-features-header">Biggest challenge & how I solved it</h3>
      <p class="project-descriptions">${esc(p.challenge)}</p>

      <h3 class="project-features-header">Images & Links</h3>
      ${imagesList(p.images, p.title)}
      ${externalLinks(p.links)}
    </div>
  `;
}

document.getElementById("projects").innerHTML = projects.map(projectCard).join("");
