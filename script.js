// --- Art data (public-domain images via Wikimedia) ---
const artworks = [
  {
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    category: "Post-Impressionism",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    source: "https://en.wikipedia.org/wiki/The_Starry_Night",
    desc: "Painted from Van Gogh’s asylum room at Saint-Rémy, swirling skies over Saint-Rémy-de-Provence.",
  },
  {
    title: "Sunflowers",
    artist: "Vincent van Gogh",
    year: "1888",
    category: "Post-Impressionism",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Vincent_Willem_van_Gogh_128.jpg",
    source: "https://en.wikipedia.org/wiki/Sunflowers_(Van_Gogh_series)",
    desc: "One of Van Gogh’s sunflower series, celebrating color, light, and texture.",
  },
  {
    title: "Water Lilies",
    artist: "Claude Monet",
    year: "1916",
    category: "Impressionism",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Claude_Monet_-_Water_Lilies_-_Google_Art_Project.jpg",
    source: "https://en.wikipedia.org/wiki/Water_Lilies_(Monet_series)",
    desc: "Monet’s immersive study of light on the lily pond at Giverny.",
  },
  {
    title: "A Sunday on La Grande Jatte",
    artist: "Georges Seurat",
    year: "1884–86",
    category: "Post-Impressionism",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_%E2%80%94_1884_-_Google_Art_Project.jpg",
    source:
      "https://en.wikipedia.org/wiki/A_Sunday_Afternoon_on_the_Island_of_La_Grande_Jatte",
    desc: "Pointillism masterpiece depicting Parisians at leisure on the Seine.",
  },
  {
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: "c. 1665",
    category: "Baroque",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
    source: "https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring",
    desc: "An enigmatic tronie famed for its light, color, and gaze.",
  },
  {
    title: "The Night Watch",
    artist: "Rembrandt",
    year: "1642",
    category: "Baroque",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/The_Nightwatch_by_Rembrandt.jpg",
    source: "https://en.wikipedia.org/wiki/The_Night_Watch",
    desc: "Militia company portrait renowned for dramatic light and motion.",
  },
  {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: "c. 1503–06",
    category: "Renaissance",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg",
    source: "https://en.wikipedia.org/wiki/Mona_Lisa",
    desc: "Perhaps the world’s most famous portrait, noted for its sfumato and smile.",
  },
  {
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    year: "1495–98",
    category: "Renaissance",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
    source: "https://en.wikipedia.org/wiki/The_Last_Supper_(Leonardo)",
    desc: "A monumental mural capturing the moment Jesus announces a betrayer.",
  },
  {
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: "c. 1484–86",
    category: "Renaissance",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Birth_of_Venus_Botticelli.jpg",
    source: "https://en.wikipedia.org/wiki/The_Birth_of_Venus",
    desc: "Venus emerges from the sea, an icon of beauty and myth.",
  },
  {
    title: "The Scream",
    artist: "Edvard Munch",
    year: "1893",
    category: "Modern",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg",
    source: "https://en.wikipedia.org/wiki/The_Scream",
    desc: "Expressionist depiction of anxiety under a blood-red sky.",
  },
  {
    title: "The Kiss",
    artist: "Gustav Klimt",
    year: "1907–08",
    category: "Modern",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/71/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    source: "https://en.wikipedia.org/wiki/The_Kiss_(Klimt)",
    desc: "Gold-leaf embrace blending Byzantine ornament and modern intimacy.",
  },
  {
    title: "The Great Wave off Kanagawa",
    artist: "Hokusai",
    year: "c. 1831",
    category: "Ukiyoe",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Great_Wave_off_Kanagawa2.jpg",
    source: "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa",
    desc: "Iconic ukiyo-e woodblock print showing a towering wave near Kanagawa.",
  },
];

// Group by category
const categories = [...new Set(artworks.map((a) => a.category))];

// Build rows
const rowsEl = document.getElementById("rows");
categories.forEach((cat) => {
  const row = document.createElement("section");
  row.className = "row";
  row.id = cat.replace(/\s+/g, "-");
  row.innerHTML = `
    <h2 id="${cat}">${cat}</h2>
    <div class="scroller">
      <button class="arrow left" aria-label="왼쪽으로 스크롤">◀</button>
      <div class="track" role="list"></div>
      <button class="arrow right" aria-label="오른쪽으로 스크롤">▶</button>
    </div>
  `;
  const track = row.querySelector(".track");

  artworks
    .filter((a) => a.category === cat)
    .forEach((a) => {
      const card = document.createElement("article");
      card.className = "card";
      card.setAttribute("role", "listitem");
      card.innerHTML = `
      <img src="${a.image}" alt="${a.title} by ${a.artist}" loading="lazy" />
      <div class="meta">
        <div class="title">${a.title}</div>
        <div class="sub">${a.artist} · ${a.year}</div>
      </div>
    `;
      card.addEventListener("click", () => openModal(a));
      track.appendChild(card);
    });

  // arrows
  const left = row.querySelector(".arrow.left");
  const right = row.querySelector(".arrow.right");
  const scrollBy = () => track.clientWidth * 0.9;
  left.addEventListener("click", () =>
    track.scrollBy({ left: -scrollBy(), behavior: "smooth" })
  );
  right.addEventListener("click", () =>
    track.scrollBy({ left: scrollBy(), behavior: "smooth" })
  );

  // wheel shift
  track.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    },
    { passive: false }
  );

  rowsEl.appendChild(row);
});

// Hero shuffle
const hero = document.getElementById("hero");
const poolForHero = artworks.slice(0, 8);
function setHero(a) {
  hero.style.backgroundImage = `url("${a.image}")`;
  document.querySelector(".hero-title").textContent = a.title;
  document.querySelector(".hero-sub").textContent = `${a.artist} · ${a.year}`;
}
setHero(poolForHero[Math.floor(Math.random() * poolForHero.length)]);
document.getElementById("shuffleBtn").addEventListener("click", () => {
  const a = poolForHero[Math.floor(Math.random() * poolForHero.length)];
  setHero(a);
});

// Modal logic
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalOpen = document.getElementById("modalOpen");

function openModal(a) {
  modalImg.src = a.image;
  modalImg.alt = `${a.title} (large)`;
  modalTitle.textContent = `${a.title} — ${a.artist} (${a.year})`;
  modalDesc.textContent = a.desc || "";
  modalOpen.href = a.source || a.image;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
modal.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-close")) closeModal();
});
document
  .querySelectorAll("[data-close]")
  .forEach((btn) => btn.addEventListener("click", closeModal));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false")
    closeModal();
});
