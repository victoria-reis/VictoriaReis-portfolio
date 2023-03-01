const init = () => {
	// scroll animation and nav style change
	window.addEventListener("scroll", () => {
		const reveals = document.querySelectorAll(".reveal");
		const nav = document.getElementById("nav");

		if (window.pageYOffset > 60) {
			nav.classList.add("on-scroll");
		} else if (window.pageYOffset < 60) {
			nav.classList.remove("on-scroll");
		}
		for (let i = 0; i < reveals.length; i++) {
			const windowHeight = window.innerHeight;
			const revealTop = reveals[i].getBoundingClientRect().top;
			const revealPoint = 150;

			if (revealTop < windowHeight - revealPoint) {
				reveals[i].classList.add("active");
			} else {
				reveals[i].classList.remove("active");
			}
		}
	});

	// typing animation
	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
	if (!reducedMotion.matches) {
		const typed = new Typed("#typed", {
			strings: ["Frontend Developer", "UI Developer", "React Developer"],
			typeSpeed: 100,
			backSpeed: 80,
			loop: true,
		});
	} else {
		const h2 = document.querySelector("#typed");
		h2.innerHTML = "Frontend Developer";
	}

	// disable video auto-play if reduced motion is true
	const video = document.getElementsByTagName("video")[0];
	if (reducedMotion.matches) {
		video.tabIndex = 0;
		video.autoplay = false;
		video.controls = true;
	}

	// mobile menu button open/close
	const mobileMenuIcon = document.querySelector(".nav-toggle");
	const navList = document.querySelector(".nav-list");
	mobileMenuIcon.addEventListener("click", () => {
		mobileMenuIcon.classList.toggle("opened");
		if (mobileMenuIcon.classList[1] === "opened") {
			navList.classList.add("open-menu");
		} else {
			navList.classList.remove("open-menu");
		}
	});

	const listItems = navList.children;
	for (i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener("click", () => {
			mobileMenuIcon.classList.remove("opened");
			navList.classList.remove("open-menu");
		});
	}
};

init();
