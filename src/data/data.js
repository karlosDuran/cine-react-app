// ─────────────────────────────────────────────
// Estructura de datos — Cinemex
// ─────────────────────────────────────────────

// Películas — imágenes locales de /assets/images
import elFinDelMundo from '../assets/images/el_fin_del_mundo.png';
import noVendoCigarros from '../assets/images/no_vendo_cigarros.png';
import granTurismo from '../assets/images/gran_turismo.png';
import superBowl from '../assets/images/super_bowl.png';
import spiderman from '../assets/images/spiderman.jpg';
import shingeki from '../assets/images/shingeki.jpg';
import bobEsponja from '../assets/images/bob_esponja.jpg';
import rapidosFuriosos from '../assets/images/rapidos_furiosos.png';
import coco from '../assets/images/coco.jpg';
import intensamente from '../assets/images/intensamente.png';
import jurassicWorld from '../assets/images/jurassic_world.png';

// Alimentos — imágenes locales
import refrescoGrande from '../assets/images/refresco_grande.jpg';
import iceeCereza from '../assets/images/icee_cereza.jpg';
import hotDog from '../assets/images/hot_dog.png';
import nachos from '../assets/images/nachos.jpg';
import palomitas from '../assets/images/palomitas.jpg';
import chocolates from '../assets/images/chocolates.jpg';

// Promociones — imágenes locales
import promoCine from '../assets/images/promo_cine.jpg';
import promoCombo from '../assets/images/promo_combo.jpg';
import promoFamilia from '../assets/images/promo_familia.jpg';
import promoEstrenos from '../assets/images/promo_estrenos.jpg';

// Fallback SVG en caso de que la imagen falle
export const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450' viewBox='0 0 300 450'%3E%3Crect fill='%23141414' width='300' height='450'/%3E%3Ctext fill='%23333' font-family='sans-serif' font-size='14' text-anchor='middle' x='150' y='220'%3EImagen no disponible%3C/text%3E%3Ccircle cx='150' cy='190' r='25' stroke='%23333' stroke-width='2' fill='none'/%3E%3C/svg%3E";

export const movies = [
  {
    id: 1,
    title: "El Fin del Mundo",
    image: elFinDelMundo,
    genre: "Comedia",
    rating: "B15",
    duration: "107 min",
    description:
      "Una comedia apocalíptica donde un grupo de amigos intenta sobrevivir al fin del mundo durante una fiesta.",
  },
  {
    id: 2,
    title: "No Vendo Cigarros Sueltos",
    image: noVendoCigarros,
    genre: "Drama",
    rating: "B",
    duration: "95 min",
    description:
      "Un drama urbano sobre la vida en la gran ciudad y las pequeñas luchas diarias.",
  },
  {
    id: 3,
    title: "Gran Turismo",
    image: granTurismo,
    genre: "Acción",
    rating: "A",
    duration: "135 min",
    description:
      "La historia real de un jugador de videojuegos que se convierte en piloto de carreras profesional.",
  },
  {
    id: 4,
    title: "El Super Bowl",
    image: superBowl,
    genre: "Documental",
    rating: "A",
    duration: "120 min",
    description:
      "La historia detrás del evento deportivo más grande del año y su show de medio tiempo.",
  },
  {
    id: 5,
    title: "Spider-Man: Across Spider-Verse",
    image: spiderman,
    genre: "Animación",
    rating: "A",
    duration: "140 min",
    description:
      "El héroe arácnido se enfrenta a nuevos villanos en esta emocionante entrega animada.",
  },
  {
    id: 6,
    title: "Shingeki No Kyojin",
    image: shingeki,
    genre: "Anime",
    rating: "B15",
    duration: "145 min",
    description:
      "La batalla final por la libertad comienza. ¿Podrá la humanidad sobrevivir a los titanes?",
  },
  {
    id: 7,
    title: "Bob Esponja: Al Rescate",
    image: bobEsponja,
    genre: "Animación",
    rating: "AA",
    duration: "91 min",
    description:
      "Bob Esponja y Patricio se embarcan en una misión para recuperar a Gary, el caracol secuestrado.",
  },
  {
    id: 8,
    title: "Rápidos y Furiosos",
    image: rapidosFuriosos,
    genre: "Acción",
    rating: "B15",
    duration: "130 min",
    description:
      "La velocidad no tiene límites. Dominic Toretto y su equipo se enfrentan a su rival más peligroso en las calles de Tokio.",
  },
  {
    id: 9,
    title: "Coco",
    image: coco,
    genre: "Animación",
    rating: "AA",
    duration: "105 min",
    description:
      "Miguel sueña con ser músico y se embarca en una aventura en la Tierra de los Muertos para descubrir la historia de su familia.",
  },
  {
    id: 10,
    title: "Intensamente",
    image: intensamente,
    genre: "Animación",
    rating: "AA",
    duration: "95 min",
    description:
      "Dentro de la mente de Riley, cinco emociones trabajan juntas para guiarla en su vida diaria. ¿Podrá Alegría mantener el equilibrio?",
  },
  {
    id: 11,
    title: "Jurassic World",
    image: jurassicWorld,
    genre: "Acción",
    rating: "B",
    duration: "124 min",
    description:
      "El parque temático de dinosaurios abre sus puertas, pero cuando un nuevo dinosaurio híbrido escapa, el caos se desata.",
  },
];

// ─────────────────────────────────────────────
// Alimentos / Dulcería
// ─────────────────────────────────────────────
export const foods = {
  bebidas: [
    {
      id: 1,
      name: "Refresco Grande",
      price: "$85",
      image: refrescoGrande,
    },
    {
      id: 2,
      name: "Icee de Cereza",
      price: "$95",
      image: iceeCereza,
    },
  ],
  comestibles: [
    {
      id: 3,
      name: "Hot Dog Jumbo",
      price: "$75",
      image: hotDog,
    },
    {
      id: 4,
      name: "Nachos con Queso",
      price: "$80",
      image: nachos,
    },
  ],
  snacks: [
    {
      id: 5,
      name: "Palomitas Mantequilla",
      price: "$90",
      image: palomitas,
    },
    {
      id: 6,
      name: "Chocolates M&M's",
      price: "$45",
      image: chocolates,
    },
  ],
};

// ─────────────────────────────────────────────
// Promociones
// ─────────────────────────────────────────────
export const promotions = [
  {
    id: 1,
    title: "Martes 2×1",
    description:
      "Todos los martes, disfruta 2×1 en todas las salas tradicionales. Válido presentando tu Tarjeta Invitado Especial.",
    icon: "🎟️",
    badge: "Popular",
    bgImage: promoCine,
  },
  {
    id: 2,
    title: "Combo Pareja",
    description:
      "2 Refrescos grandes + 1 Palomitas grandes + 1 Nachos por solo $250. Perfecto para compartir.",
    icon: "🍿",
    badge: "Ahorro",
    bgImage: promoCombo,
  },
  {
    id: 3,
    title: "Matinée Familiar",
    description:
      "De lunes a viernes antes de las 3pm, boletos a precio especial para toda la familia.",
    icon: "👨‍👩‍👧‍👦",
    badge: "Familia",
    bgImage: promoFamilia,
  },
  {
    id: 4,
    title: "Noche de Estrenos",
    description:
      "Sé el primero en ver los estrenos más esperados. Premieres exclusivas cada jueves.",
    icon: "🌙",
    badge: "Exclusivo",
    bgImage: promoEstrenos,
  },
];

// ─────────────────────────────────────────────
// Membresías
// ─────────────────────────────────────────────
export const memberships = [
  {
    id: 1,
    title: "Invitado Especial",
    tier: "Básico",
    description:
      "Únete a nuestro programa de lealtad y obtén beneficios exclusivos en cada visita.",
    benefits: ["Acumula puntos", "Martes 2×1", "Descuentos en dulcería"],
    icon: "⭐",
    accent: "#E50914",
  },
  {
    id: 2,
    title: "Invitado Platino",
    tier: "Premium",
    description:
      "Eleva tu experiencia con acceso prioritario, salas VIP y promociones únicas.",
    benefits: ["Todo lo Básico", "Salas VIP", "Preventas 48h antes", "Combo gratis al mes"],
    icon: "💎",
    accent: "#a855f7",
  },
  {
    id: 3,
    title: "Invitado Black",
    tier: "Elite",
    description:
      "La experiencia cinematográfica definitiva. Sin límites, sin filas, sin igual.",
    benefits: ["Todo lo Premium", "Boletos ilimitados", "Estacionamiento gratis", "Eventos privados"],
    icon: "🖤",
    accent: "#ffffff",
  },
];

// ─────────────────────────────────────────────
// Formatos especiales de sala
// ─────────────────────────────────────────────
export const formats = [
  {
    id: 1,
    name: "IMAX",
    description: "La pantalla más grande. Sonido envolvente. La experiencia definitiva.",
    icon: "🎬",
  },
  {
    id: 2,
    name: "4DX",
    description: "Siente el cine con movimiento, agua, viento y aromas.",
    icon: "🌊",
  },
  {
    id: 3,
    name: "Macro XE",
    description: "Pantalla gigante con tecnología láser y audio Dolby Atmos.",
    icon: "✨",
  },
];

// ─────────────────────────────────────────────
// Horarios disponibles
// ─────────────────────────────────────────────
export const horarios = ["12:00", "14:30", "17:00", "19:30", "22:00"];
