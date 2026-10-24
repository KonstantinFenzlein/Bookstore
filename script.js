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

const STORAGE_KEY = "bookstore-books";

function init() {
  loadBooks();
  renderBooks();
}

// Gespeicherte Likes und Kommentare laden (falls vorhanden)
function loadBooks() {
  try {
    let saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      books = JSON.parse(saved);
    }
  } catch (error) {
    // Ohne Speicher (z. B. privater Modus) mit den Startdaten weitermachen
  }
}

function saveBooks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  } catch (error) {
    // Speichern nicht möglich, die Seite funktioniert trotzdem
  }
}

// Benutzereingaben unschädlich machen, bevor sie per innerHTML eingefügt werden
function escapeHTML(text) {
  return String(text).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ]
  );
}

function formatPrice(price) {
  return price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
}

function renderBooks() {
  let content = document.getElementById("content");
  let html = "";

  for (let i = 0; i < books.length; i++) {
    html += getBookTemplate(books[i], i);
  }

  content.innerHTML = html;
}

// Nur eine Karte neu zeichnen und den Fokus danach wiederherstellen
function renderBook(index, focusId, openComments) {
  let card = document.getElementById(`book${index}`);
  let wasOpen = card.querySelector(".comments").open;
  card.outerHTML = getBookTemplate(books[index], index, openComments || wasOpen);

  if (focusId) {
    document.getElementById(focusId).focus();
  }
}

function getCommentsTemplate(book) {
  if (book.comments.length === 0) {
    return `<p class="comments-empty">Noch keine Kommentare. Sei der Erste!</p>`;
  }

  let commentsHTML = "";
  for (let j = 0; j < book.comments.length; j++) {
    let singleComment = book.comments[j];
    commentsHTML += `
      <li class="single-comment">
        <span class="avatar" aria-hidden="true">${escapeHTML(singleComment.name.charAt(0).toUpperCase())}</span>
        <div class="comment-bubble">
          <strong>${escapeHTML(singleComment.name)}</strong>
          <p>${escapeHTML(singleComment.comment)}</p>
        </div>
      </li>
    `;
  }
  return `
    <ul class="comments-scroll" tabindex="0" aria-label="Kommentare zu ${escapeHTML(book.name)}">
      ${commentsHTML}
    </ul>
  `;
}

function getBookTemplate(book, i, openComments) {
  let heartIcon = book.liked ? "❤️" : "🤍";
  let title = escapeHTML(book.name);
  let genre = escapeHTML(book.genre);

  return `
    <article class="book-card" id="book${i}" aria-labelledby="title${i}">
      <div class="book-cover" data-genre="${genre}">
        <span class="genre-chip">${genre}</span>
        <span class="book-cover-icon" aria-hidden="true">📖</span>
      </div>

      <div class="book-body">
        <div>
          <h2 class="book-title" id="title${i}">${title}</h2>
          <p class="book-author">von ${escapeHTML(book.author)}</p>
        </div>

        <div class="price-likes-row">
          <span class="price">${formatPrice(book.price)}</span>
          <button class="like-btn" id="likeBtn${i}" onclick="toggleLike(${i})" aria-pressed="${book.liked}">
            <span class="like-icon" aria-hidden="true">${heartIcon}</span>
            <span class="sr-only">Gefällt mir: ${title},</span>
            ${book.likes.toLocaleString("de-DE")}
            <span class="sr-only">Likes</span>
          </button>
        </div>

        <dl class="details">
          <div class="details-item">
            <dt>Genre</dt>
            <dd>${genre}</dd>
          </div>
          <div class="details-item">
            <dt>Erschienen</dt>
            <dd>${book.publishedYear}</dd>
          </div>
        </dl>

        <details class="comments"${openComments ? " open" : ""}>
          <summary>
            <span>Kommentare<span class="comment-count">${book.comments.length}</span></span>
          </summary>
          ${getCommentsTemplate(book)}
        </details>

        <form class="comment-form" onsubmit="addComment(event, ${i})" novalidate>
          <label class="sr-only" for="inputName${i}">Dein Name</label>
          <input type="text" placeholder="Name" id="inputName${i}" autocomplete="name"
            aria-describedby="error${i}">
          <label class="sr-only" for="inputComment${i}">Dein Kommentar</label>
          <input type="text" placeholder="Was denkst du?" id="inputComment${i}"
            aria-describedby="error${i}">
          <button type="submit" class="send-btn" aria-label="Kommentar senden">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
              stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/>
            </svg>
          </button>
          <p class="error" id="error${i}" aria-live="polite"></p>
        </form>
      </div>
    </article>
  `;
}

// Like setzen oder entfernen
function toggleLike(index) {
  books[index].liked = !books[index].liked;

  if (books[index].liked) {
    books[index].likes++;
  } else {
    books[index].likes--;
  }

  saveBooks();
  renderBook(index, `likeBtn${index}`);
}

//Kommentar hinzufügen
function addComment(event, index) {
  // Neuladen der Seite durch das Formular verhindern
  event.preventDefault();

  // 1. Die Eingabefelder holen
  let inputName = document.getElementById(`inputName${index}`);
  let inputComment = document.getElementById(`inputComment${index}`);
  let error = document.getElementById(`error${index}`);

  // 2. Den Text aus den Feldern holen (Leerzeichen am Rand entfernen)
  let nameValue = inputName.value.trim();
  let commentValue = inputComment.value.trim();

  // 3. Check: Ist eines der Felder leer?
  inputName.setAttribute("aria-invalid", nameValue.length === 0);
  inputComment.setAttribute("aria-invalid", commentValue.length === 0);

  if (nameValue.length === 0 || commentValue.length === 0) {
    error.textContent = "Bitte schreibe einen Namen und einen Kommentar!";
    (nameValue.length === 0 ? inputName : inputComment).focus();
    return;
  }

  // 4. Das neue Kommentar-Objekt bauen
  let newComment = {
    name: nameValue,
    comment: commentValue,
  };

  // 5. Den neuen Kommentar in das Buch-Array einfügen
  books[index].comments.push(newComment);

  saveBooks();
  renderBook(index, `inputName${index}`, true);
}
