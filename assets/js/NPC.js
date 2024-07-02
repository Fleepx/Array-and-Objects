document.addEventListener("DOMContentLoaded", () => {
const personajes = [
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
    return `<div class="personaje-${personajeJugable ? "hero" : "npc"}">
          <div class="perfil"><img class="portrait" src="${imagen}" alt="${nombre}" /></div>    
          <h2>Nombre: ${nombre}</h2>
          <p>Raza: ${raza}</p>
          <p>Clase: ${clase}</p>
          <p>Nivel: ${nivel}</p>
          <p class="${estado === "Vivo" ? "alive" : "dead"}">Estado: ${estado}</p>
          <p class="${alineamiento ? "good" : "evil"}">Alineamiento: ${alineamiento ? "Bueno" : "Malvado"}</p>
          </div>`;
  };
  
  let personajesNoJugablesHTML = "";

  for (const personaje of personajes) {
    if (!personaje.personajeJugable) {
      personajesNoJugablesHTML += renderPJ(personaje);
    }
  }

  const contenedorNpc = document.querySelector("#NPC");
  contenedorNpc.innerHTML += personajesNoJugablesHTML;
});
