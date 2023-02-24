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
	const typed = new Typed("#typed", {
		strings: ["Frontend Developer", "UI Developer", "React Developer"],
		typeSpeed: 100,
		backSpeed: 80,
		loop: true,
	});

	// portrait switch on mouseover
	// const portrait = document.querySelector("img");
	// portrait.addEventListener("mouseenter", () => {
	// 	portrait.src = "./assets/images/portrait-2-2.jpg";
	// 	portrait.alt = "portrait of Victoria Reis laughing";
	// });

	// portrait.addEventListener("mouseleave", () => {
	// 	portrait.src = "./assets/images/portrait-1.jpg";
	// 	portrait.alt = "portrait of Victoria Reis";
	// });

	// mobile menu button open/close
	// const mobileMenuIcon = document.querySelector(".nav-toggle");
	// mobileMenuIcon.addEventListener("click", () => {
	// 	mobileMenuIcon.classList.toggle("opened");
	// 	if (mobileMenuIcon.classList[1] === "opened") {
	// 		document.querySelector(".navigation .wrapper").style.right = "0";
	// 		mobileMenuIcon.style.backgroundColor = "transparent";
	// 	} else {
	// 		document.querySelector(".navigation .wrapper").style.right = "-100vw";
	// 		mobileMenuIcon.style.backgroundColor = "rgba(189, 94, 194, 0.7)";
	// 	}
	// });
};

init();
