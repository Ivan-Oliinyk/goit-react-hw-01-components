function getRandomRGB() {
  return `rgb(
    ${getRandomSpectrColor(0, 255)}, 
    ${getRandomSpectrColor(0, 255)}, 
    ${getRandomSpectrColor(0, 255)})
  `;
}

function getRandomSpectrColor(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default getRandomRGB;
