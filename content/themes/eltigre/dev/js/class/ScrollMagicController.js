const ScrollMagic = require('scrollmagic');
import 'debug.addIndicators';

class ScrollMagicController {
	constructor(args = {}) {
		this.args = args;

		this.create();
	}

	create = () => (this.controller = new ScrollMagic.Controller(this.args));
	destroy = () => {
		this.controller.destroy(true);
		this.controller = null;
	};
	reset() {
		this.destroy();
		this.create();
	}
}

export default new ScrollMagicController({
	addIndicators: true,
});
