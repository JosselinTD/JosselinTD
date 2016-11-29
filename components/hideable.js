var isHided = false;
var hideableArray = [];

AFRAME.registerComponent('hideable', {
  init: function () {
    hideableArray.push(this.el);
  }
});

window.addEventListener('keydown', function(e) {
	if (e.keyCode === 72) {
		toggleHide();
	}
});

function toggleHide() {
  isHided = !isHided;
  hideableArray.forEach(function(el) {
    el.setAttribute('visible', '' + isHided);
  });
}