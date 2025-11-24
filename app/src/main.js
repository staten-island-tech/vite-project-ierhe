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

songlist.forEach(inject);

const Funk = document.getElementById("FunkButton");
const Pop = document.getElementById("PopButton");
const Rock = document.getElementById("RockButton");
const Romance = document.getElementById("RomanceButton");
const container = document.querySelector(".container");

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

Funk.addEventListener("click", function() {
  container.innerHTML = "";
  const Funk = songlist.filter(song => song.category === "Funk");
  Funk.forEach(song => inject(song));
});

Pop.addEventListener("click", function() {
  container.innerHTML = "";
  const Pop = songlist.filter(song => song.category === "Pop");
  Pop.forEach(song => inject(song));
});

Rock.addEventListener("click", function() {
  container.innerHTML = "";
  const Rock = songlist.filter(song => song.category === "Rock");
  Rock.forEach(song => inject(song));
});

Romance.addEventListener("click", function() {
  container.innerHTML = "";
  const Romance = songlist.filter(song => song.category === "Romance");
  Romance.forEach(song => inject(song));
});
