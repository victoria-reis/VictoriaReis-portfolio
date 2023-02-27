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
	const mobileMenuIcon = document.querySelector(".nav-toggle");
	const navList = document.querySelector(".nav-list");
	mobileMenuIcon.addEventListener("click", () => {
		mobileMenuIcon.classList.toggle("opened");
		if (mobileMenuIcon.classList[1] === "opened") {
			navList.classList.add("open-menu");
		} else {
			// document.querySelector(".navigation .wrapper").style.right = "-100vw";
			// mobileMenuIcon.style.backgroundColor = "rgba(189, 94, 194, 0.7)";
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

	// const formButton = document.querySelector("#form-button");
	// const form = document.getElementsByTagName("form");
	// const contactContent = document.querySelector(".contact-content");

	// formButton.addEventListener("submit", (event) => {
	// 	event.preventDefault();
	// 	const p = document.createElement("p");
	// 	p.innerText = "Thank you for reaching out!";
	// 	form.style.display = "none";
	// 	contactContent.appendChild(p);
	// });

	// navList.children.addEventListener("click", () => {
	// 	mobileMenuIcon.classList.remove("opened");
	// 	navList.classList.remove("open-menu");
	// });
};

init();
