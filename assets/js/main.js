/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);


// Automatically update body padding when #nav size changes
function updateNavHeight() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  const height = nav.getBoundingClientRect().height;
  document.documentElement.style.setProperty("--nav-height", height + "px");
}

// On load and whenever screen size changes
window.addEventListener("load", updateNavHeight);
window.addEventListener("resize", updateNavHeight);

// Detect wrapping / height changes
const navObserver = new ResizeObserver(updateNavHeight);
navObserver.observe(document.getElementById("nav"));

