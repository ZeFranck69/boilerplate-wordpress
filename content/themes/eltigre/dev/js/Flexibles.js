const SECTIONS = {};

const FlexiblesInit = function () {
	for (let className in SECTIONS) {
		if (document.querySelector(`.${className}`)) {
			new SECTIONS[className](className);
		}
	}
};

export default FlexiblesInit;
