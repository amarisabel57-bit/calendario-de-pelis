
/* =========================================
   CALENDARIO DE PELIS 🎄❤️
   Del 27 de noviembre al 27 de diciembre
========================================= */


/* =========================================
   1. ELEMENTOS DE LA PÁGINA
========================================= */

const windowsContainer = document.getElementById("windows");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const musicButton = document.getElementById("musicButton");
const youtubePlayer = document.getElementById("youtubePlayer");

musicButton.addEventListener("click", () => {
  const playerContainer = document.querySelector(".youtube-player");

  if (playerContainer.classList.contains("visible")) {
    playerContainer.classList.remove("visible");
    youtubePlayer.src = "";
    musicButton.textContent = "♫ Escuchar Christmas Tree Farm";
  } else {
    playerContainer.classList.add("visible");
    youtubePlayer.src = "https://www.youtube.com/embed/mN3rDTAdM2o?autoplay=1";
    musicButton.textContent = "♫ Ocultar reproductor";
  }
});
const finalDoor = document.getElementById("finalDoor");

const welcomeScreen = document.getElementById("welcomeScreen");
const envelopeStage = document.getElementById("envelopeStage");
const openEnvelope = document.getElementById("openEnvelope");
const welcomeLetter = document.getElementById("welcomeLetter");
const startAdventure = document.getElementById("startAdventure");


/* =========================================
   2. CONFIGURACIÓN DEL ALMACENAMIENTO
========================================= */

const STORAGE_KEY = "calendarioPelisVentanas";
const WELCOME_KEY = "calendarioPelisBienvenidaV4";

let openedWindows = JSON.parse(
  localStorage.getItem(STORAGE_KEY) || "[]"
);


/* =========================================
   3. BIENVENIDA Y SOBRE
========================================= */

if (localStorage.getItem(WELCOME_KEY) === "true") {
  welcomeScreen.classList.add("hidden");
}

openEnvelope.addEventListener("click", () => {
  envelopeStage.classList.add("hidden");
  welcomeLetter.classList.add("show");
});

startAdventure.addEventListener("click", () => {
  localStorage.setItem(WELCOME_KEY, "true");
  welcomeScreen.classList.add("hidden");
});


/* =========================================
   4. CARTAS ESPECIALES
========================================= */

const letters = {

  "2026-11-27": {
    title: "🎄 ¡Bienvenido a nuestra pequeña aventura navideña!",
    paragraphs: [
      "Se me ocurrió crear algo diferente para nosotros, una manera de compartir este mes y guardar pequeños recuerdos, incluso estando en lugares diferentes.",
      "Durante los próximos 31 días tendremos una pequeña sorpresa esperándonos: películas, cartas, actividades, conversaciones y muchas cositas que preparé con mucho cariño.",
      "Cada ventanita tendrá algo especial y quiero que disfrutemos de cada día sin adelantarnos a las sorpresas. ",
      "Quizás parezca algo sencillo, pero para mí significa mucho poder crear nuestras propias tradiciones y encontrar maneras de compartir momentos contigo.",
      "Así que prepara las palomitas, busca tu mantita favorita y ponte cómodo, porque tenemos muchas películas por descubrir.",
      "Nuestra aventura comienza hoy.",
      "¿Estás listo?"
    ],
    signature: "Con cariño, Mary. ❤️"
  },

  "2026-12-01": {
    title: "¡Feliz comienzo de diciembre! 🎄✨",
    paragraphs: [
      "¡POR FIN LLEGÓ DICIEMBRE!",
      "No sabes cuánto me emociona que haya llegado este mes y que podamos compartirlo de una manera tan nuestra.",
      "Diciembre tiene algo especial, ¿no crees? Las luces, las películas navideñas, la música, las decoraciones y todas esas pequeñas cosas que hacen que el ambiente se sienta diferente.",
      "Quiero que este mes esté lleno de momentos bonitos para nosotros. Que tengamos muchas risas, conversaciones, películas que nos encanten y otras que probablemente terminemos criticando JAJAJA.",
      "También quiero que disfrutemos de las cosas sencillas, que nos emocionemos por las pequeñas sorpresas y que hagamos de este diciembre un recuerdo bonito.",
      "Tenemos todavía muchísimas ventanitas por descubrir y una Navidad entera por compartir.",
      "Que comience nuestro diciembre. ❤️"
    ],
    signature: "Con cariño, Mary."
  },

  "2026-12-05": {
    title: "Hoy es un día muy especial. 🎂❤️",
    paragraphs: [
      "¡FELIZ CUMPLEAÑOS, CARIÑO!",
      "Hoy celebramos tu vida y quiero recordarte lo especial que eres, no solamente para mí, sino también para todas las personas que tienen la suerte de conocerte.",
      "Deseo que este nuevo año de vida venga acompañado de muchísimas alegrías, oportunidades, aprendizajes y sueños cumplidos. Que nunca te falten motivos para sonreír, personas que te quieran bonito y fuerzas para seguir persiguiendo todo aquello que deseas.",
      "Ojalá pudiera acompañarte hoy y celebrar contigo de la manera que mereces, pero aunque la distancia nos separe, no quería dejar pasar este día sin hacerte sentir lo importante que eres.",
      "Me hace muy feliz poder compartir contigo, conocerte cada día un poquito más y ser parte de tu vida.",
      "Nunca olvides lo valioso que eres y todo lo bonito que tienes para ofrecerle al mundo.",
      "Espero que hoy recibas muchísimo cariño y que este cumpleaños sea el comienzo de una etapa maravillosa.",
      "Feliz vida, mi amor. Que todos tus deseos encuentren su camino.",
      "Te amo millones."
    ],
    signature: "Con cariño, Mary. ❤️",
    birthday: true
  },

  "2026-12-25": {
    title: "🎄❤️ ¡FELIZ NAVIDAD!",
    paragraphs: [
      "Llegó uno de los días más bonitos del año y no quería dejar pasar esta fecha sin dedicarte unas palabritas.",
      "Me habría encantado que esta Navidad pudiéramos compartirla en el mismo lugar, disfrutar de las decoraciones, ver películas juntos y vivir todas esas pequeñas tradiciones navideñas que seguramente serían todavía más bonitas a tu lado.",
      "Pero, aunque hoy nos toque celebrar desde diferentes lugares, me alegra muchísimo que hayamos encontrado nuestra propia manera de compartir este mes.",
      "Espero que disfrutes muchísimo este día, que estés rodeado de las personas que quieres, que recibas muchos abrazos y que tu corazón esté lleno de alegría.",
      "Gracias por formar parte de mis días y por permitirme compartir contigo tantas cositas bonitas.",
      "Y ojalá que esta sea una de muchísimas Navidades que todavía nos quedan por celebrar.",
      "Que nunca nos falten los motivos para ilusionarnos, crear tradiciones y seguir construyendo recuerdos.",
      "Te deseo una Navidad preciosa, llena de amor, tranquilidad y felicidad."
    ],
    signature: "Con cariño, Mary. ❤️"
  },

  "2026-12-27": {
    title: "Y así termina nuestra pequeña aventura navideña... 🎄",
    paragraphs: [
      "¡Llegamos a nuestra última ventanita!",
      "Parece mentira que hayan pasado tantos días desde aquella primera carta, cuando comenzamos esta pequeña aventura sin saber todos los recuerdos que terminaríamos reuniendo.",
      "Durante estos días compartimos películas, intercambiamos opiniones, pusimos puntuaciones, escribimos comentarios y encontramos pequeños momentos para estar juntos, incluso estando lejos.",
      "Ahora tenemos un montón de películas que recordar, algunas favoritas, otras que seguramente no volveríamos a ver JAJAJA, y muchísimas pequeñas conversaciones que hicieron especial este calendario.",
      "Quiero que sepas que disfruté mucho preparar todo esto y encontrar una manera diferente de compartir contigo este mes. Porque, al final, no se trataba solamente de ver películas, sino de tener algo nuestro, una pequeña tradición que pudiéramos recordar con cariño.",
      "Espero que cuando vuelvas a ver alguna de estas portadas recuerdes esta Navidad y sonrías al pensar en todo lo que compartimos.",
      "Gracias por formar parte de esta aventura, por cada momento y por hacerme ilusión con tantas cosas sencillas.",
      "Y aunque hoy abramos nuestra última puerta, no significa que se terminen nuestras tradiciones ni las ideas que todavía nos quedan por inventar.",
      "Nos vemos en la próxima Navidad. 🎄❤️"
    ],
    signature: "Con cariño, Mary."
  }

};


/* =========================================
   5. LISTA SECRETA DE PELÍCULAS
========================================= */


const movies = [
  { title: "Navidad de golpe", poster: "posters/01.jpeg", phrase: "A veces, los planes más inesperados terminan convirtiéndose en los recuerdos más bonitos." },
  { title: "Navidad real", poster: "posters/02.jpg", phrase: "La magia también aparece cuando nos permitimos ser nosotros mismos." },
  { title: "Nuestro secretito", poster: "posters/03.jpeg", phrase: "Hay historias que se disfrutan todavía más cuando se comparten en complicidad." },
  { title: "El calendario de navidad", poster: "posters/04.jpg", phrase: "Cada día puede guardar una sorpresa y una razón para ilusionarse." },
  { title: "La navidad está servida", poster: "posters/05.jpg", phrase: "Los mejores momentos suelen tener algo de cariño y una pizca de caos." },
  { title: "Un recuerdo de navidad", poster: "posters/06.jpg", phrase: "Algunos recuerdos encuentran la forma de quedarse con nosotros." },
  { title: "Pinceladas de navidad", poster: "posters/07.jpg", phrase: "A veces, los pequeños detalles son los que dan color a una historia." },
  { title: "Noelle", poster: "posters/08.jpg", phrase: "La bondad y las ganas de ayudar pueden encender cualquier celebración." },
  { title: "Mi pobre angelito 1", poster: "posters/09.jpg", phrase: "La creatividad y el ingenio pueden convertir cualquier situación en una aventura." },
  { title: "Mi pobre angelito 2", poster: "posters/10.jpg", phrase: "Cada aventura puede traer nuevas sorpresas y momentos inolvidables." },
  { title: "Operación muérdago", poster: "posters/11.jpg", phrase: "Los mejores planes no siempre salen como se esperaba, y ahí está la diversión." },
  { title: "El hostal de la felicidad", poster: "posters/12.jpg", phrase: "Un lugar nuevo puede convertirse en hogar cuando se llena de buenos momentos." },
  { title: "El diario de Noel", poster: "posters/13.jpg", phrase: "A veces, mirar atrás nos ayuda a entender lo que realmente importa." },
  { title: "El intercambio navideño", poster: "posters/14.jpg", phrase: "Un pequeño gesto puede traer una sorpresa mucho más grande." },
  { title: "Mi pobre angelito 3", poster: "posters/15.jpg", phrase: "La aventura siempre encuentra nuevas formas de sorprendernos." },
  { title: "El caballero de la navidad", poster: "posters/16.jpg", phrase: "La aventura comienza cuando alguien se atreve a creer en lo extraordinario." },
  { title: "Navidad en la avenida del molino", poster: "posters/17.jpg", phrase: "La Navidad tiene una manera especial de reunir historias y personas." },
  { title: "La razón de estar contigo: una Navidad perfecta", poster: "posters/18.jpg", phrase: "Lo que hace especial una celebración es con quién elegimos compartirla." },
  { title: "Un castillo por Navidad", poster: "posters/19.jpg", phrase: "A veces, los nuevos comienzos llegan desde los lugares menos esperados." },
  { title: "Operación feliz Navidad", poster: "posters/20.jpg", phrase: "La generosidad puede transformar una misión en algo mucho más grande." },
  { title: "A Christmas Carol", poster: "posters/21.jpg", phrase: "Una nueva perspectiva puede cambiar la manera en que vemos la vida." },
  { title: "Mi pobre angelito 4", poster: "posters/22.jpg", phrase: "Las aventuras navideñas nunca dejan de sorprender." },
  { title: "Mi pobre angelito 5", poster: "posters/23.jpg", phrase: "La Navidad también está llena de situaciones inesperadas." },
  { title: "Operación regalo", poster: "posters/24.jpg", phrase: "La ilusión de dar también puede ser el mejor regalo." },
  { title: "El extraño mundo de Jack", poster: "posters/25.jpg", phrase: "Incluso los mundos más diferentes pueden encontrar algo que celebrar." },
  { title: "Klaus", poster: "posters/26.jpg", phrase: "Un acto de bondad puede inspirar muchos más." },
  { title: "Mi pobre angelito 6", poster: "posters/27.jpg", phrase: "La creatividad y el ingenio pueden convertir cualquier situación en una aventura." },
  { title: "El regalo prometido", poster: "posters/28.jpg", phrase: "A veces, conseguir el regalo perfecto resulta ser toda una aventura." },
  { title: "El Grinch", poster: "posters/29.jpg", phrase: "La Navidad puede encontrar espacio incluso en los corazones más inesperados." },
  { title: "Una Navidad de locos", poster: "posters/30.jpg", phrase: "No todas las celebraciones salen según el plan, pero pueden ser memorables." },
  { title: "Krampus", poster: "posters/31.jpg", phrase: "No todas las historias navideñas son tranquilas; algunas tienen un toque de misterio." }
];



/* =========================================
   6. FECHA ACTUAL DE HONDURAS
========================================= */

function hondurasToday() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Tegucigalpa",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());

  const values = {};

  parts.forEach(part => {
    values[part.type] = part.value;
  });

  return `${values.year}-${values.month}-${values.day}`;
}
/* =========================================
   6. MOSTRAR FECHAS BLOQUEADAS
========================================= */

function showNotYet(key) {
  const [year, month, day] = key.split("-").map(Number);

  const monthNames = [
    "enero", "febrero", "marzo", "abril",
    "mayo", "junio", "julio", "agosto",
    "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const readableDate = `${day} de ${monthNames[month - 1]}`;

  showModal(`
    <div class="birthday">
      <h2 class="letter-title">¡Todavía no! 🤫</h2>

      <p class="letter-text">
        Esta sorpresita todavía está esperando su momento.
        <br><br>
        Podrás descubrirla el <strong>${readableDate}</strong>.
        <br><br>
        ¡La paciencia también forma parte de nuestra aventura! 🎄
      </p>
    </div>
  `);
}


/* =========================================
   7. CREAR LAS 31 VENTANITAS
========================================= */

function createWindows() {

  const dates = [
    "2026-11-27", "2026-11-28", "2026-11-29", "2026-11-30",
    "2026-12-01", "2026-12-02", "2026-12-03", "2026-12-04",
    "2026-12-05", "2026-12-06", "2026-12-07", "2026-12-08",
    "2026-12-09", "2026-12-10", "2026-12-11", "2026-12-12",
    "2026-12-13", "2026-12-14", "2026-12-15", "2026-12-16",
    "2026-12-17", "2026-12-18", "2026-12-19", "2026-12-20",
    "2026-12-21", "2026-12-22", "2026-12-23", "2026-12-24",
    "2026-12-25", "2026-12-26", "2026-12-27"
  ];

  dates.forEach(key => {

    const day = Number(key.slice(-2));

    const button = document.createElement("button");
    button.className = "window";
    button.type = "button";
    button.dataset.date = key;

    const number = document.createElement("span");
    number.className = "window-number";
    number.textContent = day;

    const lock = document.createElement("span");
    lock.className = "lock";

    button.appendChild(number);
    button.appendChild(lock);

    const isUnlocked = hondurasToday() >= key;
    const isOpened = openedWindows.includes(key);

    lock.textContent = isOpened ? "✓" : (isUnlocked ? "✦" : "🔒");

    if (isOpened) {
      button.classList.add("opened");
    }

    button.addEventListener("click", () => {

if (hondurasToday() < key) {
  showNotYet(key);
  return;
}

      openWindow(key, button);
    });

    windowsContainer.appendChild(button);

  });

}


/* =========================================
   8. ABRIR UNA VENTANITA
========================================= */

function openWindow(key, button) {

  const letter = letters[key];

  if (!openedWindows.includes(key)) {
    openedWindows.push(key);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(openedWindows)
    );
  }

  button.classList.add("opened");
  button.querySelector(".lock").textContent = "✓";

  let letterHTML = "";

  if (letter) {
    letterHTML = `
      <h2 class="letter-title">${letter.title}</h2>

      <div class="letter-text">
        ${letter.paragraphs.map(p => `<p>${p}</p>`).join("")}
      </div>

      <p class="letter-signature">${letter.signature}</p>
    `;
  }

  // La fecha determina la posición de la película en la lista secreta.
  const startDate = new Date("2026-11-27T00:00:00");
  const currentDate = new Date(`${key}T00:00:00`);
  const movieIndex = Math.round((currentDate - startDate) / 86400000);
  const movie = movies[movieIndex];

  
const movieHTML = movie ? `
  <div class="movie-placeholder">
    <h3>🍿 Nuestra película del día</h3>

    <img
      src="posters/${movie.poster}"
      alt="Póster de ${movie.title}"
      style="
        display: block;
        width: 100%;
        max-width: 240px;
        height: auto;
        margin: 20px auto;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.25);
      "
    >

    <h2 class="letter-title">${movie.title}</h2>
    <p><em>${movie.phrase}</em></p>
    <p>🎬 ¡Que comience nuestra función!</p>
  </div>
` : `
  <div class="movie-placeholder">
    <h3>🍿 Nuestra película del día</h3>
    <p>No se encontró la película correspondiente a esta fecha.</p>
  </div>
`;


  showModal(letterHTML + movieHTML);

  if (letter && letter.birthday) {
    launchBirthdayConfetti();
  }

}
/* =========================================
   9. VENTANAS EMERGENTES
========================================= */

function showModal(content) {
  modalContent.innerHTML = content;
  modal.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
}

closeModal.addEventListener("click", hideModal);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    hideModal();
  }
});


/* =========================================
   10. PUERTA FINAL
========================================= */

finalDoor.addEventListener("click", () => {

if (hondurasToday() < "2026-12-27") {
    showNotYet("2026-12-27");
    return;
  }

  openFinalDoor();

});

function openFinalDoor() {
  const albumHTML = `
    <div class="final-letter">
      <h2>❤️ ¡Nuestro viaje navideño!</h2>
      <p>31 películas, un montón de momentos compartidos y una Navidad que siempre vamos a recordar.</p>
      <p>Gracias por formar parte de esta aventura conmigo.</p>
      <p><strong>Con cariño, Mary.</strong></p>
    </div>

    <h3 class="album-title">🎬 Nuestro álbum navideño</h3>

    <div class="album-grid">
      ${movies.map((movie, index) => `
        <div class="album-item">
          <img src="${movie.poster}" alt="${movie.title}">
          <p>${String(index + 1).padStart(2, "0")}. ${movie.title}</p>
        </div>
      `).join("")}
    </div>

    <div class="final-message">
      <h3>❤️</h3>
      <p><strong>Nos vemos en la próxima Navidad.</strong></p>
    </div>
  `;

  showModal(albumHTML);
}



/* =========================================
   11. CONFETI DE CUMPLEAÑOS
========================================= */

function launchBirthdayConfetti() {

  const decorations = [
    "🎉", "🎊", "🎈", "✨", "🎂", "❤️"
  ];

  for (let i = 0; i < 55; i++) {

    const piece = document.createElement("span");

    piece.className = "confetti";

    piece.textContent =
      decorations[Math.floor(Math.random() * decorations.length)];

    piece.style.left = Math.random() * 100 + "vw";

    piece.style.animationDelay =
      Math.random() * 1.8 + "s";

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 5500);

  }

}
/* =========================================
   12. NIEVE ANIMADA
========================================= */

function createSnow() {

  const snow = document.querySelector(".snow");

  for (let i = 0; i < 45; i++) {

    const flake = document.createElement("span");

    flake.className = "snowflake";
    flake.textContent = "❄";

    flake.style.left = Math.random() * 100 + "vw";

    flake.style.fontSize =
      (8 + Math.random() * 13) + "px";

    flake.style.animationDuration =
      (7 + Math.random() * 10) + "s";

    flake.style.animationDelay =
      (Math.random() * 10) + "s";

    snow.appendChild(flake);

  }

}


/* =========================================
   13. INICIAR CALENDARIO
========================================= */

createWindows();
createSnow();