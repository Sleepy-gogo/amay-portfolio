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

let indexActivo = 0;

const proyectos = document.getElementsByClassName("proyecto");

function obtenerSiguienteIndice(n) {
	return n + 1 <= proyectos.length - 1 ? n + 1 : 0;
}

function obtenerPrevioIndice(n) {
	return n - 1 >= 0 ? n -1 : proyectos.length - 1;
}

const handleNext = () => {
	const nextIndex = obtenerSiguienteIndice(indexActivo);
	const nextOfNextIndex = obtenerSiguienteIndice(nextIndex);

	const anteriorProyecto = document.querySelector('[data-state="before"]')

	anteriorProyecto.setAttribute('data-state', "inactive");

	const proyectoActual = document.querySelector(`[data-index="${indexActivo}"]`),
		  nextProyecto = document.querySelector(`[data-index="${nextIndex}"]`),
		  futuroProyecto = document.querySelector(`[data-index="${nextOfNextIndex}"]`)

	proyectoActual.setAttribute('data-state', "before");
	nextProyecto.setAttribute('data-state', "active");
	futuroProyecto.setAttribute('data-state', "after");

	indexActivo = nextIndex;
};

const handleBack = () => {
	const backIndex = obtenerPrevioIndice(indexActivo);
	const backOfBackIndex = obtenerPrevioIndice(backIndex);

	const siguienteProyecto = document.querySelector('[data-state="after"]')

	siguienteProyecto.setAttribute('data-state', "inactive");

	const proyectoActual = document.querySelector(`[data-index="${indexActivo}"]`),
		  backProyecto = document.querySelector(`[data-index="${backIndex}"]`),
		  previoAbackProyecto = document.querySelector(`[data-index="${backOfBackIndex}"]`)

	proyectoActual.setAttribute('data-state', "after");
	backProyecto.setAttribute('data-state', "active");
	previoAbackProyecto.setAttribute('data-state', "before");

	indexActivo = backIndex;
};

const handleSubmit = (e) => {
	e.preventDefault();

	alert("Mensaje enviado exitosamente.")
}