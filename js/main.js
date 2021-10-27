/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
  "./img/01.jpg",
  "./img/02.jpg",
  "./img/03.jpg",
  "./img/04.jpg",
  "./img/05.jpg",
];

// Titoli
const titleCollection = [
  "Svezia",
  "Svizzera",
  "Gran Bretagna",
  "Germania",
  "Paradise",
];

// Testi
const textCollection = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  "Lorem ipsum",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
  "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
];

// Vado a pescare gli elementi dal DOM - immagini e thumbails

const imgRef = document.querySelector(".images");

const thumbsRef = document.querySelector(".thumbs");

for (let i = 0; i < imageCollection.length; i++) {
  imgRef.innerHTML = `<div class="image-container active">
                <img src="${imageCollection[0]}" alt="${titleCollection[0]}">
                <div class="text">
                    <h3>${titleCollection[0]}</h3>
                    <p>${textCollection[0]}</p>
                </div>`;
}
