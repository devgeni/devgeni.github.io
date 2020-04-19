'use strict';

svg4everybody();

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
				document.documentElement.classList.add('is-' + category + '-' + value);
			}
		});
	};

	check('engine', ['blink', 'gecko', ['msedge', 'edge'],
		['msie', 'ie'], 'webkit'
	]);

	check('device', ['mobile', 'tablet']);

	check('browser', ['android', 'bada', 'blackberry', 'chrome', 'firefox', 'ios', 'kMeleon', ['msedge', 'edge'],
		['msie', 'ie'], 'opera', 'phantom', 'qupzilla', 'safari', 'sailfish', ['samsungBrowser', 'samsung'], 'seamonkey', 'silk', 'sleipnir', 'tizen', 'ucbrowser', 'vivaldi', 'webos', ['yandexbrowser', 'yandex']
	]);

	check('os', ['android', 'bada', 'blackberry', 'chromeos', 'firefoxos', 'ipad', 'iphone', 'ipod', 'ios', 'linux', 'mac', 'windows', 'windowsphone', 'sailfish', 'tizen', 'webos']);
})();

var $window = $(window);
var $document = $(document);
var $html = $(document.documentElement);
var $body = $(document.body);

if ($) {
	$(document).foundation();
}

function preanimate($elements, dataAttr, callback) {
	$elements.each(function(index, element) {
		var $element = $(element);

		$element.addClass($element.data(dataAttr || 'animate'));
	});

	if (callback) {
		callback();
	}
}

function removePreloader(selector, callback) {
	$(selector || '#preloader').fadeOut(1000, 'linear', callback);
}

function animate($elements, selector) {
	var theClass = $elements.data(selector);

	$elements.addClass('transitioned');
	$elements.removeClass(theClass);
}

if ($) {
	$(document).ready(function() {
		var endLoad = new Date() - window.startLoad;
		var delay = void 0;

		if (endLoad < 600) {
			delay = 900 - endLoad;
		} else if (endLoad > 2000) {
			delay = 0;
		} else {
			delay = 300;
		}

		var ANIMATION_SELECTOR = 'animate';
		var $ELEMENTS = $('[data-' + ANIMATION_SELECTOR + ']');

		if ($ELEMENTS.length) {
			setTimeout(function() {
				preanimate($ELEMENTS, ANIMATION_SELECTOR, function() {
					removePreloader('#preloader', function() {
						animate($ELEMENTS, ANIMATION_SELECTOR);
					});
				});
			}, delay);
		} else {
			removePreloader('#preloader');
		}
	});
}
