const container = document.querySelector('#container');
const button = document.querySelector('#clear');







function makeRandColor() {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  return `rgb(${red},${blue},${green})`
}



for(let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.classList.add('pixel');
  container.appendChild(div);
  div.addEventListener("mouseover", event => {
    div.style.backgroundColor = makeRandColor();
  });
  
  div.addEventListener("mouseout", event => {
    console.log("Mouse out");
  });

  button.addEventListener('click', () => {
    div.style.backgroundColor = '';
    })
  
} 




