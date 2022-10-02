let All_images_link2 = [
    'https://onemg.gumlet.io/assets/2e61b010-39d7-11ed-81ac-0a2a0bfbf692.jpg?format=auto',
    'https://onemg.gumlet.io/assets/a56696d0-39d7-11ed-ad6f-0a93c9beafce.jpg?format=auto',
    'https://onemg.gumlet.io/assets/d9fa7552-147e-11ed-bf47-0a7644f785c6.png?format=auto',
    'https://onemg.gumlet.io/assets/e406cd06-39d7-11ed-8d85-0acb2b1fe408.jpg?format=auto',
    'https://onemg.gumlet.io/assets/8caf7042-d511-11ec-a81c-0a1e05c4583e.png?format=auto',
    'https://onemg.gumlet.io/assets/d798e690-3a62-11ed-988f-025c288f92b2.png?format=auto',
  ];

  let imageList4 = document.getElementById('sidebar1IMG');
  let slide_bar1 = document.getElementsByClassName('slide_bar1');
  let image_position4 = 0;

  setInterval(function () {
    image_position4++;
    if (image_position4 === All_images_link2.length) {
      image_position4 = 0;
    }
    imageList4.src = All_images_link2[image_position4];
  }, 3000);