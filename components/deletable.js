var isControl = false;

AFRAME.registerComponent('deletable', {
  init: function () {
    this.el.addEventListener('click', function(ev) {
    	if (isControl) {
    		this.parentNode.removeChild(this);
    	}
    });
  }
});

window.addEventListener('keydown', function(e) {
	if (e.keyCode === 17) {
		isControl = true;
	}
});

window.addEventListener('keyup', function(e) {
	if (e.keyCode === 17) {
		isControl = false;
	}
});