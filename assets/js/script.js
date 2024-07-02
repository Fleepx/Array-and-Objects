document.addEventListener("DOMContentLoaded", () => {
const personajes = [
  {
    id: 1,
    imagen: "./assets/imgs/AukanAgatash.jpg",
    nombre: "Aukan Agatosh",
    raza: "Goliath",
    clase: "Bárbaro",
    nivel: 10,
    estado: "Vivo",
    alineamiento: true,
    personajeJugable: true,
  },
  {
    id: 2,
    imagen: "./assets/imgs/GregorioReigen.jpeg",
    nombre: "Gregorio Reigen",
    raza: "Elfo",
    clase: "Hechicero",
    nivel: 9,
    estado: "Vivo",
    alineamiento: false,
    personajeJugable: true,
  },
  {
    id: 3,
    imagen: "./assets/imgs/Izamir.jpg",
    nombre: "Izamir",
    raza: "Medio-Orco",
    clase: "Bárbaro",
    nivel: 10,
    estado: "Vivo",
    alineamiento: true,
    personajeJugable: true,
  },
  {
    id: 4,
    imagen: "./assets/imgs/OldBasilio.jpg",
    nombre: "Old Basilio",
    raza: "Humana",
    clase: "Clérigo",
    nivel: 5,
    estado: "Vivo",
    alineamiento: false,
    personajeJugable: true,
  },
  {
    id: 5,
    imagen: "./assets/imgs/LâramissTeldúriën.jpg",
    nombre: "Lâramiss Teldúriën",
    raza: "Gnomo",
    clase: "Mago",
    nivel: 14,
    estado: "Vivo",
    alineamiento: false,
    personajeJugable: true,
  },
  {
    id: 6,
    imagen:"./assets/imgs/PrudenceMarplefern.png",
    nombre: "Prudence Marplefern",
    raza: "Halfling",
    clase: "Pícara",
    nivel: 8,
    estado: "Vivo",
    alineamiento: true,
    personajeJugable: true,
  },
  {
    id: 7,
    imagen: "./assets/imgs/LyraMoonshadow.jpg",
    nombre: "Lyra Moonshadow",
    raza: "Elfa",
    clase: "Hunter",
    nivel: "???",
    estado: "Vivo",
    alineamiento: true,
    personajeJugable: false,
  },
  {
    id: 8,
    imagen: "./assets/imgs/ShavaDarkwood.png",
    nombre: "Shava Darkwood",
    raza: "Elfo",
    clase: "Pícara",
    nivel: "???",
    estado: "Muerto",
    alineamiento: false,
    personajeJugable: false,
  },
  {
    id: 9,
    imagen: "./assets/imgs/BranBlackwood.jpg",
    nombre: "Bran Blackwood",
    raza: "Humano",
    clase: "Pícaro",
    nivel: "???",
    estado: "Muerto",
    alineamiento: false,
    personajeJugable: false,
  },
  {
    id: 10,
    imagen: "./assets/imgs/DrogathStormclaw.jpg",
    nombre: "Drogath Stormclaw",
    raza: "Dragonborn",
    clase: "Mago",
    nivel: "???",
    estado: "Muerto",
    alineamiento: false,
    personajeJugable: false,
  }
];

const renderPJ = ({ imagen, nombre, raza, clase, nivel, estado, alineamiento, personajeJugable}) => {
  const iconoEstado = estado === "Vivo" ? '<i class="fa-solid fa-heart fa-xs"></i>' : '<i class="fa-solid fa-skull fa-xs"></i>';
  const iconoAlineamiento = alineamiento ? '<i class="fa-solid fa-cross fa-xs"></i></i>' : '<i class="fa-solid fa-book-skull fa-xs"></i>';
  return `<div class="personaje-${personajeJugable ? "hero" : "npc"}">
        <div class="perfil"><img class="portrait" src="${imagen}" alt="${nombre}" /></div>    
        <h2>Nombre: ${nombre}</h2>
        <p>Raza: ${raza}</p>
        <p>Clase: ${clase}</p>
        <p>Nivel: ${nivel}</p>
        <p class="${estado === "Vivo" ? "alive" : "dead"}">Estado: ${estado} ${iconoEstado}</p>
        <p class="${alineamiento ? "good" : "evil"}">Alineamiento: ${alineamiento ? "Bueno" : "Malvado"} ${iconoAlineamiento}</p>
        </div>`;
};

let personajesJugablesHTML = "";
let personajeNoJugableHTML = "";  

for (const personaje of personajes) {
  if (personaje.personajeJugable) {
    personajesJugablesHTML += renderPJ(personaje);
  } else {
    personajeNoJugableHTML += renderPJ(personaje);
  }
}

const contenedorPj = document.querySelector("#PJ");
const contenedorNpc = document.querySelector("#NPC");

contenedorPj.innerHTML += personajesJugablesHTML;
contenedorNpc.innerHTML += personajeNoJugableHTML;
});