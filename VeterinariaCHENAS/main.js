let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, 
  {
    loop: true,
    delay: 75,
  });
 
typewriter
  .pauseFor(2500)
  .typeString('Tu mejor opción en calidad y precio...')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  
alert('Sitio Web en proceso');  