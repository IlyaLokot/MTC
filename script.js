const mediaPaths = [
    'images/cat_1.jpg',
    'images/cat2.jpg',
    'images/cat4.jpg',
    'images/cat5.jpg',
    'images/cat6.jpg',
    'images/cat7.jpg',
    'videos/cat3.mp4',
    'images/cat8.jpg',
    'images/crash.jpg',
    'images/hyundai1.jpg',
    'images/hyundai2.jpg',
    'videos/cat4.mp4',
    'images/hyundai3.jpg',
];
const gallery = document.getElementById('gallery');

mediaPaths.forEach((src) => {
  const div = document.createElement('div');
  div.className = 'gallery-item';

  if (src.endsWith('.mp4')) {
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    video.style.width = '100%';
    div.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = src;
    img.style.width = '100%';
    div.appendChild(img);
  }

  gallery.appendChild(div);
});
