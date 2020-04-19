'use strict';

function _toConsumableArray(arr) {
	if (Array.isArray(arr)) {
		for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
			arr2[i] = arr[i];
		}
		return arr2;
	} else {
		return Array.from(arr);
	}
}

// svg4everybody();

(function() {
	var iterate = function iterate(items, callback) {
		items.forEach(function(item) {
			var key = void 0;
			var value = void 0;

			if (typeof item === 'string') {
				key = item;
				value = item;
			} else {
				key = item[0];
				value = item[1];
			}

			callback(key, value);
		});
	};

	var check = function check(category, items) {
		iterate(items, function(key, value) {
			if (bowser[key]) {
				$(document.documentElement).addClass('is-' + category + '-' + value);
			}
		});
	};

	check('engine', ['webkit', 'blink', 'gecko', ['msie', 'ie'],
		['msedge', 'edge']
	]);

	check('device', ['mobile', 'tablet']);

	check('browser', ['chrome', 'firefox', ['msie', 'ie'],
		['msedge', 'edge'], 'safari', 'android', 'ios', 'opera', ['samsungBrowser', 'samsung'], 'phantom', 'blackberry', 'webos', 'silk', 'bada', 'tizen', 'seamonkey', 'sailfish', 'ucbrowser', 'qupzilla', 'vivaldi', 'sleipnir', 'kMeleon'
	]);

	check('os', ['mac', 'windows', 'windowsphone', 'linux', 'chromeos', 'android', 'ios', 'iphone', 'ipad', 'ipod', 'blackberry', 'firefoxos', 'webos', 'bada', 'tizen', 'sailfish']);
})();

/* eslint-disable no-unused-vars */

var $window = $(window);
var $document = $(document);
var $html = $(document.documentElement);
var $body = $(document.body);

$(document).ready(function() {
	window.percent = 0;

	var Skills = {
		list: document.querySelectorAll('input[type="checkbox"]'),
		getLength: function getLength() {
			return this.list.length;
		},
		getCheckedLength: function getCheckedLength() {
			return [].concat(_toConsumableArray(this.list)).filter(function(item) {
				return item.checked;
			}).length;
		},
		getPercent: function getPercent() {
			return this.getCheckedLength() / this.getLength();
		}
	};

	var Counter = {
		COLOR_YELLOW: '#ffc815',
		COLOR_GREEN: '#a3cd3b',
		COLOR_BLUE: '#0093d7',

		element: document.querySelector('[data-count]'),

		changeColor: function changeColor(colour) {
			this.element.style.color = colour;
		},
		setTransition: function setTransition(val) {
			this.element.style.transition = 'color ' + val + 'ms';
		},
		setColor: function setColor(val) {
			if (val < 0.3) {
				this.changeColor(this.COLOR_YELLOW);
			} else if (val < 0.7) {
				this.changeColor(this.COLOR_GREEN);
			} else {
				this.changeColor(this.COLOR_BLUE);
			}
			this.setTransition(Math.abs(this.getCount() - this.getStart()) * 3);
		},
		getCount: function getCount() {
			return this.element.dataset.count;
		},
		setCount: function setCount(value) {
			this.element.dataset.count = value;
		},
		getStart: function getStart() {
			return parseInt(this.element.textContent, 10);
		},
		setStart: function setStart(value) {
			this.element.textContent = value;
		},
		animate: function animate() {
			var _this = this;

			var start = this.getStart();
			var count = this.getCount();
			var status = '';

			var interval = setInterval(function() {
				if (start < count) {
					start += 10;
					status = 'up';
				} else {
					start -= 10;
					status = 'down';
				}
				_this.setStart(start);
				if (status === 'up' && start >= count || status === 'down' && start <= count) {
					clearInterval(interval);
				}
			}, 10);
		}
	};

	var Meter = {
		element: document.querySelector('#meter-arrow'),
		rotate: function rotate(deg) {
			this.element.style.transform = 'rotate(' + deg + 'deg)';
		}
	};

	Object.defineProperty(window, 'percent', {
		set: function set(val) {
			Counter.setCount(Math.round(val * 1000));
			Counter.setColor(val);
			Counter.animate();
			Meter.rotate(Math.floor(180 * val));
		}
	});

	$('#skills').on('change', 'input[type="checkbox"]', function() {
		window.percent = Skills.getPercent();
	});

	window.percent = Skills.getPercent();
});
