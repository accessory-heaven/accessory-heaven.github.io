function throttle(func, timeFrame) {
  var lastTime = 0;
  return function () {
      var now = new Date();
      if (now - lastTime >= timeFrame) {
          func();
          lastTime = now;
      }
  };
}

function scrollHandler() {
  var header, banner, backgroundImage, listText, bannerHeight, headerHeight, opacity, padding, top, viewportWidth;
  header = document.getElementsByTagName('header')[0];
  banner = document.getElementById('banner');
  backgroundImage = document.getElementsByClassName('background-image')[0];
  listText = document.querySelectorAll('#nav li');
  headerHeight = header.clientHeight;
  bannerHeight = banner.clientHeight;
  top = window.scrollY / (bannerHeight - headerHeight);
  viewportWidth = window.innerWidth;
  if (viewportWidth <= 767) {
    opacity = 1;
    padding = (opacity * 25) + 27;
  } else {
    if (top < 1) {
      opacity = 1 - top;
      padding = (opacity * 25) + 27;
    } else {
      opacity = 0;
      padding = 27;
    }
  }
  backgroundImage.style.opacity = opacity;
  for (var item of listText) {
    item.style.paddingTop = padding + 'px';
  }
}

window.addEventListener('scroll', throttle(scrollHandler, 10));
