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
const Reset = document.getElementById("ResetButton")
const container = document.querySelector(".container");
const lusic = container.querySelector(".addtolist");

const DOMSelectors = {
  title: document.getElementById("title"),
  url: document.getElementById("url"),
  usercontainer:document.querySelector(".usercontainer"),
};

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
        <button class="addtolist">Add to your album</button>
      </div>`
    );
}

function userinject(album){
  DOMSelectors.usercontainer.insertAdjacentHTML("afterbegin",
    `<div class="card">
    <img class="img" src="${album.url}"/>
      <div class="Name">
        <h1>${album.title}</h1>
      </div>
      <button class="remove btn">Remove Album</button>
      </div>`
  );
}

lusic.addEventListener("click", function () {
  const album = {
    title: music.name
  }
  songlist.name = document.getElementById("Name").value;
  songlist.img = document.getElementById("img").value;
  userinject(album);
  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", removeAlbum);
  });
});

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

Reset.addEventListener("click", function() {
  container.innerHTML = "";
  songlist.forEach(inject);
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let album = {};
  album.title = document.getElementById("title").value;
  album.url = document.getElementById("url").value;
  userinject(album);
  clearFields();
  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", removeAlbum);
  });
});

function removeAlbum(event) {
  event.target.parentElement.remove();
}

function clearFields() {
  DOMSelectors.title.value = "";
  DOMSelectors.url.value = "";
}

