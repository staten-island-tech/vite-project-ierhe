import './style.css'
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("whitemode")) {
    document.body.classList.add("darkmode");
    document.body.classList.remove("whitemode");
  } else {
    document.body.classList.add("whitemode");
    document.body.classList.remove("darkmode");
  }
});

const songlist = [
  {
  name: "placeholder",
  category: "Pop",
  img: "placeholder",
  alt: "placeholder",
  },
  {
  name: "placeholder",
  category: "Rock",
  img: "placeholder",
  alt: "placeholder",
  },
  {
  name: "placeholder",
  category: "Funk",
  img: "placeholder",
  alt: "placeholder",
  },
  {
  name: "placeholder",
  category: "Romance",
  img: "placeholder",
  alt: "placeholder",
  }
];

function inject(music){
  const container = document.querySelector(".container")
  container.insertAdjacentHTML("beforeend",
    `<div class="card">
      <img class="img" src="${music.img}"/>
        <div class="Name">
          <h1>${music.name}</h1>
        </div>
        <div class="Category">
          <h1>${music.category}</h1>
        </div>
      </div>`
    );
}

songlist.forEach(inject);

const Funk = document.getElementById("FunkButton");
const Pop = document.getElementById("PopButton");
const Rock = document.getElementById("RockButton");
const Romance = document.getElementById("RomanceButton");

Funk.addEventListener("click", function() {
  container.innerHTML = "";
  const Funk = songlist.filter(songlist => songlist.category === "Funk");
  Funk.forEach(songlist => inject(songlist));
});

Pop.addEventListener("click", function() {
  container.innerHTML = "";
  const Pop = songlist.filter(songlist => songlist.category === "Pop");
  Pop.forEach(songlist => inject(songlist));
});

Rock.addEventListener("click", function() {
  container.innerHTML = "";
  const Rock = songlist.filter(songlist => songlist.category === "Rock");
  Rock.forEach(songlist => inject(songlist));
});

Romance.addEventListener("click", function() {
  container.innerHTML = "";
  const Romance = songlist.filter(songlist => songlist.category === "Romance");
  Romance.forEach(songlist => inject(songlist));
});
