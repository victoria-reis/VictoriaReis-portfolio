// scroll animation
window.addEventListener("scroll", () => {
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
});

// mobile menu animation
const mobileMenuIcon = document.querySelector(".nav-toggle");

mobileMenuIcon.addEventListener("click", () => {
	mobileMenuIcon.classList.toggle("opened");
	if (mobileMenuIcon.classList[1] === "opened") {
		document.querySelector(".navigation .wrapper").style.right = "0";
		mobileMenuIcon.style.backgroundColor = "transparent";
	} else {
		document.querySelector(".navigation .wrapper").style.right = "-100vw";
		mobileMenuIcon.style.backgroundColor = "rgba(189, 94, 194, 0.7)";
	}
});
