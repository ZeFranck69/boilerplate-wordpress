import ScrollMagic from 'scrollmagic';
import { TweenLite, TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
import ScrollMagicController from './class/ScrollMagicController';
import Swup from 'swup';
import FlexiblesInit from './Flexibles';
export default class App {
	constructor() {
		this.revealManager();
		FlexiblesInit();
	}

	revealManager() {
		document.querySelectorAll('[gsap-reveal]').forEach((el) => {
			let tween = TweenLite.fromTo(el, 1, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1 });
			new ScrollMagic.Scene({
				triggerElement: el,
				triggerHook: 0.95,
				duration: window.innerHeight / 3,
			})
				.setTween(tween)
				.addTo(ScrollMagicController.controller);
		});
	}
}

document.addEventListener('DOMContentLoaded', function (ev) {
	new App();
	// const swup = new Swup();
	// swup.on('contentReplaced', () => {
	// 	window.scrollTo(0, 0);
	// 	ScrollMagicController.reset();
	// 	new App(false);
	// });
});
