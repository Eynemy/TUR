window.onload = function() {
    var img = document.querySelector('.img-zoom img');
    var isClicked = false;
  
    img.onclick = function(e) {
      isClicked = !isClicked;
      this.style.cursor = isClicked ? 'zoom-out' : 'zoom-in';
    };
  
    img.onmousemove = function(e) {
      if (isClicked) {
        var rect = this.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top,
            xPercent = Math.min(Math.round(100 * x / this.width), 95),
            yPercent = Math.min(Math.round(100 * y / this.height), 95);
        this.style.transformOrigin = xPercent + '% ' + yPercent + '%';
        this.style.transform = 'scale(1.8)';
      } else {
        this.style.transformOrigin = 'center center';
        this.style.transform = 'scale(1)';
      }
    };
  };
  