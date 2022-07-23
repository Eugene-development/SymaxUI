import { gsap } from 'gsap';

const gsapOpacity = (boxParam) => {
	const tl = gsap.timeline();
	tl.from('#' + boxParam.box, {
		opacity: 0
	});
};

const gsapTextToRight = (param_1, param_2) => {
	const tl = gsap.timeline();
	const duration = 3;
	tl.to('#' + param_1, { duration, x: 10, delay: 1 }).to('#' + param_2, { duration, x: 10 });
};

const toBig = (param1) => {
	const tl = gsap.timeline();
	tl.to('#' + param1, { scale: 1.02, delay: 0.3 }).to('#' + param1, { scale: 0.99 });
};

export const useGSAP = {
	gsapOpacity,
	gsapTextToRight,
	toBig
};
