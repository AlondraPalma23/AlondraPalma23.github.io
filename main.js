let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante en Sistemas Computacionales y Progamadora')
  .pauseFor(20)
  .deleteChars(15)
  .start();
