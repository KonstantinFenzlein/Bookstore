let books = [
  {
    name: "Die Geheimnisse des Ozeans",
    author: "Clara Meer",
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: "Fantasy",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
      },
      {
        name: "Bookworm84",
        comment:
          "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
      },
      {
        name: "FantasyFanatic",
        comment:
          "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
      },
      {
        name: "SciFiGuru",
        comment:
          "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
      },
      {
        name: "NovelLover",
        comment:
          "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
      },
    ],
  },
  {
    name: "Der vergessene Pfad",
    author: "Maximilian Schwarz",
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Die Farben des Himmels",
    author: "Laura Blau",
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: "Romantik",
    comments: [
      {
        name: "LeserPeter",
        comment:
          "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
      },
      {
        name: "BookLover21",
        comment:
          "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
      },
      {
        name: "FantasyNerd",
        comment:
          "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
      },
      {
        name: "SciFiEnthusiast",
        comment:
          "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
      },
      {
        name: "ReadingAddict",
        comment:
          "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
      },
    ],
  },
  {
    name: "Das Rätsel der Zeit",
    author: "Alexander Weiss",
    likes: 750,
    liked: false,
    price: 18.0,
    publishedYear: 2020,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BuchKenner",
        comment:
          "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
      },
      {
        name: "LeseWurm",
        comment:
          "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
      },
    ],
  },
  {
    name: "Der letzte Wächter",
    author: "Sabine Grün",
    likes: 1300,
    liked: true,
    price: 16.75,
    publishedYear: 2017,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Im Schatten des Mondes",
    author: "Philipp Silber",
    likes: 890,
    liked: false,
    price: 12.3,
    publishedYear: 2022,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BücherLiebhaber",
        comment:
          "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
      },
      {
        name: "Leseratte",
        comment:
          "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
      },
    ],
  },
  {
    name: "Jenseits der Sterne",
    author: "Oliver Schwarz",
    likes: 1450,
    liked: true,
    price: 21.0,
    publishedYear: 2015,
    genre: "Science-Fiction",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
      },
    ],
  },
  {
    name: "Das verborgene Königreich",
    author: "Elena Gold",
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: "Fantasy",
    comments: [
      {
        name: "Bookworm92",
        comment:
          "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
      },
    ],
  },
  {
    name: "Liebe in Zeiten des Krieges",
    author: "Emilia Rot",
    likes: 1800,
    liked: true,
    price: 19.99,
    publishedYear: 2016,
    genre: "Romantik",
    comments: [
      {
        name: "Bibliophile23",
        comment:
          "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
      },
      {
        name: "StorySeeker",
        comment:
          "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
      },
      {
        name: "SciFiExplorer",
        comment:
          "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
      },
    ],
  },
];

function init() {
  renderBooks();
}

function renderBooks() {
  let content = document.getElementById("content");
  content.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    let book = books[i];

    let heartIcon = book.liked ? "❤️" : "🤍";

    let commentsHTML = "";

    if (book.comments.length === 0) {
      commentsHTML = "<p>Keine Kommentare. Sei der Erste!</p>";
    } else {
      for (let j = 0; j < book.comments.length; j++) {
        let singleComment = book.comments[j];
        commentsHTML += `
                    <div class="single-comment">
                        <strong>[${singleComment.name}]</strong>: ${singleComment.comment}
                    </div>
                `;
      }
    }

    content.innerHTML += `
            <div class="book-card">
                <div class="book-title">${book.name}</div>
                <div class="divider"></div>
                
                <div class="book-cover">
                    📘 <!-- Hier könntest du <img src="${
                      book.image
                    }"> nutzen -->
                    <span style="float:right; font-size: 1.5rem;">☆</span>
                </div>
                
                <div class="divider"></div>

                <div class="price-likes-row">
                    <span class="price">${book.price.toFixed(2)} €</span>
                    <div class="likes">
                        <span>${book.likes}</span>
                        <button class="heart-btn" onclick="toggleLike(${i})">${heartIcon}</button>
                    </div>
                </div>

                <div class="details-row">
                    <span>Author:</span>
                    <span>${book.author}</span>
                </div>
                <div class="details-row">
                    <span>Erscheinungsjahr:</span>
                    <span>${book.publishedYear}</span>
                </div>
                <div class="details-row">
                    <span>Genre:</span>
                    <span>${book.genre}</span>
                </div>

                <div class="divider"></div>

                <div class="comments-section">
                    <div class="comments-header">Kommentare:</div>
                    <div class="comments-scroll">
                        ${commentsHTML} <!-- Hier fügen wir die gesammelten Kommentare ein -->
                    </div>
                </div>

                <div class="input-section">
                    <input type="text" placeholder="Name..." id="inputName${i}">
                    <input type="text" placeholder="Kommentar..." id="inputComment${i}">
                    <button onclick="addComment(${i})">✉️</button>
                </div>
            </div>
        `;
  }
}

// Testen des Herz-Buttons
function toggleLike(index) {
  books[index].liked = !books[index].liked;

  if (books[index].liked) {
    books[index].likes++;
  } else {
    books[index].likes--;
  }

  renderBooks();
}

//Kommentar hinzufügen
function addComment(index) {
  // 1. Die Eingabefelder holen
  let inputName = document.getElementById(`inputName${index}`);
  let inputComment = document.getElementById(`inputComment${index}`);

  // 2. Den Text aus den Feldern holen
  let nameValue = inputName.value;
  let commentValue = inputComment.value;

  // 3. Check: Ist eines der Felder leer?
  if (nameValue.length === 0 || commentValue.length === 0) {
    alert("Bitte schreibe einen Namen und einen Kommentar!");
    return;
  }

  // 4. Das neue Kommentar-Objekt bauen
  let newComment = {
    name: nameValue,
    comment: commentValue,
  };

  // 5. Den neuen Kommentar in das Buch-Array einfügen
  books[index].comments.push(newComment);

  renderBooks();
}
