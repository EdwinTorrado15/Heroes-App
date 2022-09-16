/* Arreglo de super heroes */
let superHeroes = [
  {
    id: 1,
    nombre: "Aquaman",
    bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
    img: "../assets/img/aquaman.png",
    aparicion: "1941-11-01",
    casa: "DC",
  },
  {
    id: 2,
    nombre: "Batman",
    bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
    img: "../assets/img/batman.png",
    aparicion: "1939-05-01",
    casa: "DC",
  },
  {
    id: 3,
    nombre: "Daredevil",
    bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
    img: "../assets/img/daredevil.png",
    aparicion: "1964-01-01",
    casa: "Marvel",
  },
  {
    id: 4,
    nombre: "Hulk",
    bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
    img: "../assets/img/hulk.png",
    aparicion: "1962-05-01",
    casa: "Marvel",
  },
  {
    id: 5,
    nombre: "Linterna Verde",
    bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
    img: "../assets/img/linterna-verde.png",
    aparicion: "1940-06-01",
    casa: "DC",
  },
  {
    id: 6,
    nombre: "Spider-Man",
    bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
    img: "../assets/img/spiderman.png",
    aparicion: "1962-08-01",
    casa: "Marvel",
  },
  {
    id: 7,
    nombre: "Wolverine",
    bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
    img: "../assets/img/wolverine.png",
    aparicion: "1974-11-01",
    casa: "Marvel",
  },
];

for (let heroe of superHeroes) {
  // Creamos la carta
  let card = document.createElement("div");

  // La categoria de la tarjeta debe permanecer oculta inicialmente
  card.classList.add(
    "carta",
    heroe.casa,
    "hide",
    "animate__animated",
    "animate__fadeIn"
  );

  // Contenedor imagen carta
  let contenedorImg = document.createElement("div");
  contenedorImg.classList.add("image-container");

  // Etiqueta de la carta
  let image = document.createElement("img");
  image.setAttribute("src", heroe.img);
  contenedorImg.appendChild(image);

  // Cuerpo carta
  let cuerpoCarta = document.createElement("div");
  cuerpoCarta.classList.add("contenedor");
  // Nombre del heroe
  let name = document.createElement("h5");
  name.classList.add("heroe-name");
  name.innerHTML = heroe.nombre.toUpperCase();
  cuerpoCarta.appendChild(name);

  /* Seccion aparicion */
  let aparicion = document.createElement("div");
  aparicion.classList.add("aparicion");
  cuerpoCarta.appendChild(aparicion);

  /* Text */
  let quote = document.createElement("span");
  quote.classList.add("quote");
  quote.innerText = "Aparicion: ";
  aparicion.append(quote);

  //Aparicion
  let appearance = document.createElement("h6");
  appearance.innerText = heroe.aparicion;
  aparicion.append(appearance);
  /* Fin seccion aparicion */

  /* Boton ver mas informacion */
  let verMas = document.createElement("button");
  verMas.setAttribute("id", "boton-modal" + heroe.id);
  verMas.classList.add("ver-mas");
  verMas.innerHTML = "Ver mas iformacion";
  cuerpoCarta.append(verMas);

  // Cuerpo carta

  card.appendChild(contenedorImg);
  card.appendChild(cuerpoCarta);
  document.getElementById("heroes").appendChild(card);
}

// Parámetro pasado desde el botón (parámetro igual que categoría)
function filterHeroe(value) {
  // Seleccionamos todos los botones con la clase 'button-value'
  let buttons = document.querySelectorAll(".button-value");

  buttons.forEach((button) => {
    // Comprobar si el valor es igual al texto interior
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Abrir modal
  for (let heroe of superHeroes) {
    if (document.getElementById("boton-modal" + heroe.id)) {
      // Accedemos al contenedor de la modal con el id
      let modal = document.getElementById("myModal");

      // Accedemos a cada boton modal de cada carta
      let button = document.getElementById("boton-modal" + heroe.id);
      let span = document.getElementsByClassName("close")[0];

      // Accion abrir modal
      button.onclick = function () {
        modal.style.display = "block";

        let cuerpoModal = document.createElement("div");
        cuerpoModal.classList.add('cuerpo-modal')

        let imgModal = document.createElement("img");
        imgModal.setAttribute("src", heroe.img);
        cuerpoModal.append(imgModal);

        let nombreModal = document.createElement('h6')
        nombreModal.innerHTML = heroe.nombre;
        nombreModal.classList.add('heroe-name')
        cuerpoModal.append(nombreModal)

        let bioModal = document.createElement('span')
        bioModal.innerHTML = heroe.bio;
        cuerpoModal.append(bioModal)

        let casaModal = document.createElement('span')
        casaModal.innerHTML = heroe.casa
        casaModal.classList.add('casa')
        cuerpoModal.append(casaModal);

        document.getElementById("cuerpo-modal").appendChild(cuerpoModal);
        console.log("Abrir");
      };
      // Fin accion abrir modal

      // Accion cerrar modal
      span.onclick = function () {
        modal.style.display = "none";
        document.getElementById("cuerpo-modal").innerHTML = " ";
        console.log("Cerrado");
      };
    }
  }

  // Seleccionar todas las cartas
  let elements = document.querySelectorAll(".carta");
  // Recorremos todas las cartas
  elements.forEach((element) => {
    // Mostramos todas las cartas con boton Todos
    if (value == "Todos") {
      element.classList.remove("hide");
    } else {
      // verificar si el elemento contiene una clase casa
      if (element.classList.contains(value)) {
        // Display basado en la casa
        element.classList.remove("hide");
      } else {
        // Mostrar otros elementos
        element.classList.add("hide");
      }
    }
  });
}

// Boton busqueda
document.getElementById("search").addEventListener("click", () => {
  // Inicializamos
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".heroe-name");
  let cards = document.querySelectorAll(".carta");

  // Recorremos todos los elementos
  elements.forEach((element, index) => {
    // Comprobar si el texto incluye el valor de busqueda
    if (element.innerText.includes(searchInput.toUpperCase())) {
      // Mostrar cartas
      cards[index].classList.remove("hide");
    } else {
      // Mostrar otras
      cards[index].classList.add("hide");
    }
  });
});

// Mostrar todos los productos
window.onload = () => {
  filterHeroe("Todos");
};
