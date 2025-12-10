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
  name: "HOW DOES IT FEEL?",
  category: "Pop",
  creator: "The Kid LAROI",
  img: "https://images.genius.com/af8a4471062c706018d9bc0e735d4a1d.1000x1000x1.png",
  alt: "placeholder",
  },
  {
  name: "placeholder",
  category: "Rock",
  creator: "",
  img: "placeholder",
  alt: "placeholder",
  },
  {
  name: "placeholder",
  category: "Funk",
  creator: "",
  img: "placeholder",
  alt: "placeholder",
  },
  {
  name: "placeholder",
  category: "Romance",
  creator: "",
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

const DOMSelectors = {
  title: document.getElementById("title"),
  url: document.getElementById("url"),
  usercontainer: document.querySelector(".usercontainer"),
  picturecontainer: document.querySelector(".picturecontainer"),
  totalpicture: document.getElementById("totalpicture"),
};

function inject(music){
  const container = document.querySelector(".container")
  container.insertAdjacentHTML("beforeend",
    `<div class="card">
      <img class="img" src="${music.img}"/>
        <div class="Name">
          <h1>${music.name}</h1>
        </div>
        <div class="Name">
          <h1>${music.creator}</h1>
        </div>
        <div class="Category">
          <h1>${music.category}</h1>
        </div>
        <button class="addtolist btn">Add to your album</button>
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
  DOMSelectors.picturecontainer.insertAdjacentHTML("afterbegin",
    `<img class="totalimg" src="${album.totalpicture}"/>`
  );
}

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("addtolist")) {
    const card = e.target.closest(".card");
    const title = card.querySelector(".Name h1").textContent;
    const img = card.querySelector(".img").src;
    const album = {
      title: title,
      url: img
    };
    userinject(album);
    document.querySelectorAll(".remove").forEach((button) => {
      button.addEventListener("click", removeAlbum);
    });
  }
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let album = {};
  album.title = document.getElementById("title").value;
  album.url = document.getElementById("url").value;
  album.totalpicture = document.getElementById("totalpicture").value;
  userinject(album);
  clearFields();
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

function removeAlbum(event) {
  event.target.parentElement.remove();
}

function clearFields() {
  DOMSelectors.title.value = "";
  DOMSelectors.url.value = "";
  DOMSelectors.totalpicture.value = "";
}

function noalbumart() {
  
}