document.addEventListener("DOMContentLoaded", () => {
	const lenis = new Lenis();

	lenis.on("scroll", (event: MouseEvent) => {
		console.log(event);
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	const textSplitted = new SplitType(".text-reveal-stagger");

	gsap.registerPlugin(ScrollTrigger);

	gsap.to(".char", {
		scrollTrigger: ".char",
		y: 0,
		stagger: 0.07,
		delay: 0.2,
		duration: 0.1,
		opacity: 1,
	});

	function onTriggeredByScroll(element: string, options: any) {
		document.querySelectorAll(element).forEach((element: HTMLElement) => {
			gsap.to(element, {
				scrollTrigger: {
					trigger: element,
				},
				...options,
			});
		});
	}

	onTriggeredByScroll(".element-reveal-scale", {
		opacity: 1,
		duration: 0.7,
		transform: "scale(1)",
	});

	onTriggeredByScroll(".element-reveal-slide-up", {
		opacity: 1,
		duration: 0.7,
		y: 0,
	});

	document.querySelectorAll(".element-reveal").forEach((element, index) => {
		gsap.to(element, {
			scrollTrigger: element,
			stagger: 0.1,
			opacity: 1,
			delay: 0.2 + index * 0.1,
			duration: 0.3,
			y: 0,
		});
	});
});
