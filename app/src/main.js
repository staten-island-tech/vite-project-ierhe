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

songlist [
  {
  name: "placeholder",
  category: "placeholder",
  img: "placeholder",
  alt: "placeholder",
  },
  {
  name: "placeholder",
  category: "placeholder",
  img: "placeholder",
  alt: "placeholder",
  },
  {
  name: "placeholder",
  category: "placeholder",
  img: "placeholder",
  alt: "placeholder",
  },
  {
  name: "placeholder",
  category: "placeholder",
  img: "placeholder",
  alt: "placeholder",
  }
]

function inject(music){
    const container = document.querySelector(".container")
    container.insertAdjacentHTML("beforeend",
        `<div class="card">
        <img class="img" src="${music.img}"/>
            <div class="Category">
                <h1>${music.category}</h1>
            </div>
        </div>`
    );
}

songlist.forEach(inject);