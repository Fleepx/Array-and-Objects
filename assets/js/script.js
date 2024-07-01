document.addEventListener("DOMContentLoaded", () => {
const personajes = [
  {
    id: 1,
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
    nombre: "Izamir",
    raza: "Orco",
    clase: "Bárbaro",
    nivel: 10,
    estado: "Vivo",
    alineamiento: true,
    personajeJugable: true,
  },
  {
    id: 4,
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
    nombre: "Korrin Stonehammer",
    raza: "Enano",
    clase: "Peleador",
    nivel: "???",
    estado: "Vivo",
    alineamiento: true,
    personajeJugable: false,
  },
  {
    id: 8,
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
    nombre: "Kael Fireheart",
    raza: "Tiefling",
    clase: "Mago",
    nivel: "???",
    estado: "Muerto",
    alineamiento: false,
    personajeJugable: false,
  }
];

const renderPJ = ({ nombre, raza, clase, nivel, estado, alineamiento, personajeJugable}) => {
  return `<div class="personaje-${personajeJugable ? "hero" : "npc"}">
        <h2>Nombre: ${nombre}</h2>
        <p>Raza: ${raza}</p>
        <p>Clase: ${clase}</p>
        <p>Nivel: ${nivel}</p>
        <p class="${estado === "Vivo" ? "alive" : "dead"}">Estado: ${estado}</p>
        <p class="${alineamiento ? "good" : "evil"}">Alineamiento: ${alineamiento ? "Bueno" : "Malvado"}</p>
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