function whichTransitionEvent() {
	var t;
	var el = document.createElement('fakeelement');
	var transitions = {
		'transition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'MozTransition': 'transitionend',
		'WebkitTransition': 'webkitTransitionEnd'
	}

	for (t in transitions) {
		if (el.style[t] !== undefined) {
			return transitions[t];
		}
	}
}

(function () {
	window.addEventListener('load', init);
	
	function init() {
		const accordion = document.getElementById('accordion');
		const itemList = [...accordion.querySelectorAll('.accordion__item')];
		const transitionEvent = whichTransitionEvent();
		const makeActiveClass = (element) => {
			element.classList.add('is-active');
		};
		
		
		accordion.addEventListener('change', (e) => {
			const item = e.target.parentNode.parentNode;
			
			itemList.forEach((el) => {
				if (el.classList.contains('is-active')) {
					el.classList.remove('is-active');
				}
			});

			accordion.addEventListener(transitionEvent, function onetimer(e) {
				makeActiveClass(item);
				accordion.removeEventListener(transitionEvent, onetimer);
			});
		});

		// js supported
		document.documentElement.classList.add('js');
	}
})();