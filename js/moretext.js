if ('querySelector' in document &&
	'addEventListener' in window) {

	var toggleButtons = document.querySelectorAll('.toggle-content');
	var fullTextWrappers = document.querySelectorAll('.fulltext');
	var fullText;
	var toggleButtonText;


	[].forEach.call(fullTextWrappers, function(fullTextWrapper) {
		// hide all full text on load
		fullTextWrapper.setAttribute('hidden', true);
	});

	[].forEach.call(toggleButtons, function(toggleButton) {
		// show toggle more buttons
		toggleButton.removeAttribute('hidden');

		// add listener for each button
		toggleButton.addEventListener('click', function () {

			fullTextWrapper = this.parentElement.querySelector('.fulltext');
			toggleButtonText = this.querySelector('.text');

			// change attributes and text if full text is shown/hidden
			if (!fullTextWrapper.hasAttribute('hidden')) {
				toggleButtonText.innerText = 'Show More';
				fullTextWrapper.setAttribute('hidden', true);
				toggleButton.setAttribute('aria-expanded', false);
			} else {
				toggleButtonText.innerText = 'Show Less';
				fullTextWrapper.removeAttribute('hidden');
				toggleButton.setAttribute('aria-expanded', true);
			}
		});
	});
}
