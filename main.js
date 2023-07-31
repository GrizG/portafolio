
/* const myModal = document.getElementById('modal-contactame')
const myElement = document.getElementById('contactame')

myModal.addEventListener('shown.bs.modal', () => {
    myElement.focus();
}); */


let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Grisel Aguilar')
  .pauseFor(300)
  .deleteChars(14)
  .typeString('Desarrolladora')
  .pauseFor(300)
  .deleteChars(14)
  .start();

