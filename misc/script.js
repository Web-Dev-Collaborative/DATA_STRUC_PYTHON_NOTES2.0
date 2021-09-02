// start when the page is loaded
window.onload = function () {
  let urls = [
    'http://...first',
    'http://...second',
    // ....
    'http://...tenth', // no ,!!
  ];

  let index = 1;
  let el = document.getElementById('rotator');

  setTimeout(function rotate() {
    if (index === urls.length) {
      index = 0;
    }

    el.src = urls[index];
    index = index + 1;

    // continue rotating iframes
    setTimeout(rotate, 5000);
  }, 5000); // 5000ms = 5s
};
