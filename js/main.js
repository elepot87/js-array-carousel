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

// Indice immagine del carosello attiva
let activeImg = 1;

// voglio mostrare nell'HTML la struttura utilizzando però le immagini cho nel JS.

for (let i = 0; i < imageCollection.length; i++) {
  imgRef.innerHTML += `<div class="image-container">
                <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
                <div class="text">
                    <h3>${titleCollection[i]}</h3>
                    <p>${textCollection[i]}</p>
                </div>`;

  thumbsRef.innerHTML += `<div class="thumb">
                <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
            </div>`;
}

// Impostare l'immagine e la thumbnail active --> HTML collection e aggiungo la classe active
document
  .getElementsByClassName("image-container")
  [activeImg].classList.add("active");

document.getElementsByClassName("thumb")[activeImg].classList.add("active");

// Al clic della freccia next devo far andare avanti immagini e thumbails

const btnNext = document.querySelector(".next");

btnNext.addEventListener("click", function () {
  //aggiornare indice dell'immagine attiva
  activeImg++;
  console.log(activeImg);

  //impostare immagine attiva da vedere: reset di quella attuale e impostare la successiva
  document.querySelector(".image-container.active").classList.remove("active");
  document
    .getElementsByClassName("image-container")
    [activeImg].classList.add("active");

  //impostare le thumbnails come fatto per le immagini
  document.querySelector(".thumb.active").classList.remove("active");
  document.getElementsByClassName("thumb")[activeImg].classList.add("active");
});
