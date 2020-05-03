window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div'); //will get all div inside the .pads
  const visual = document.querySelector('.visual');
  const body = document.querySelector('body')


  const nameMusic = document.querySelector('.name-music');
  /*PADS*/ 
  const pad1 = document.querySelector('.pad1');
  const pad2 = document.querySelector('.pad2');
  const pad3 = document.querySelector('.pad3');
  const pad4 = document.querySelector('.pad4');
  const pad5 = document.querySelector('.pad5');
  const pad6 = document.querySelector('.pad6');


  pad1.addEventListener('click', () => {
    nameMusic.innerHTML = 'Post Malone - Rockstar';
    body.style.background = "linear-gradient(125deg, #333, #c6a64c, #333, #c6a64c)"
  });

  pad2.addEventListener('click', () => {
    nameMusic.innerHTML = 'Alok, Bruno Martini, Zeeba - Never let Me Go';
    body.style.background = "linear-gradient(to left, #d9787a, #fca649, #d9787a)"
  });

  pad3.addEventListener('click', () => {
    nameMusic.innerHTML = 'Hungria - Made in Favela';
    body.style.background = "linear-gradient(to left, #1e1e1e, #e3e3e3, #1e1e1e)"

  });

  pad4.addEventListener('click', () => {
    nameMusic.innerHTML = 'Axwell Λ Ingrosso - More Than You know';
    body.style.background = "linear-gradient(to right, #d5013c, #f5530b, #87005c)"
  });

  pad5.addEventListener('click', () => {
    nameMusic.innerHTML = 'Prismo - Sense';
    body.style.background = "linear-gradient(to right, #1a2119, #3a4139, #1a2119)"

  });

  pad6.addEventListener('click', () => {
    nameMusic.innerHTML = 'Lil Peep, Marshmellow - Spotlight';
    body.style.background = "linear-gradient(to right, #000000, #8a0000, #000000)"

  });


  const cover = [
    "url('./img/malone.jpg')",
    "url('./img/alok.jpg')",
    "url('./img/hungria.jpg')",
    "url('./img/axwell.jpg')",
    "url('./img/prismo.jpg')",
    "url('./img/marsh.jpg')",
  ]

  //Lets get going with the sound here
  pads.forEach((pad1, index) => {
    pad1.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  //create a fucntion that makes bubbles
  const createBubble = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.animation = "show 6s ease";
    bubble.style.backgroundImage = cover[index]
  }
});