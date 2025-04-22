const banner = document.getElementById('inicio');

const images = [
  'img/home/06.2014 (27).jpg',
  'img/home/06.2014 (32).jpg',
  'img/home/08.2014 (5).jpg',
  'img/home/08.2014 (6).jpg'
];

let index = 0;

function changeBannerBackground() {
  banner.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

changeBannerBackground();

setInterval(changeBannerBackground, 5000);