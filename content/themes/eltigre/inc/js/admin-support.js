(function (document, window, undefined) {
	window.addEventListener('load', function () {
		var form = document.getElementById('support-form');
		if (form) {
			form.addEventListener('submit', function (ev) {
				ev.preventDefault();
			});
		}
	});
})(document, window, undefined);
