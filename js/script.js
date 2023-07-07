window.addEventListener("scroll", () => {
	let header = document.querySelector("header");
	header.classList.toggle("header-opaco", window.scrollY > 0);
});

const navigation = document.querySelector('.navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
	const visible = navigation.getAttribute('data-visible') == "true";
	const visibility = !visible

	navigation.setAttribute('data-visible', visibility);
	navToggle.setAttribute('aria-expanded', visibility);
});