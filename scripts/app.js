const reveal = () => {
	const reveals = document.querySelectorAll(".reveal");

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
};
window.addEventListener("scroll", reveal);

const hamburgerMenu = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".menu-ul");
const menuActive = () => {
	hamburgerMenu.classList.toggle("active");
	mobileMenu.classList.toggle("wide-nav");
};

hamburgerMenu.addEventListener("click", menuActive);
