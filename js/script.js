window.addEventListener("scroll", () => {
	let header = document.querySelector("header");
	header.classList.toggle("header-opaco", window.scrollY > 0);
});
