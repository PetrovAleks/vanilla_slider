const refs = {
	btn: document.querySelector(".js-btn-event"),
	slider: document.querySelectorAll(".js-slider"),
	text: document.querySelector(".js-text-anim"),
};
refs.btn.addEventListener("click", nextSlid);

let id = 0;
function nextSlid(event) {
	addClassName(id);
	if (event.target.className === "slider__btn btn--right") {
		id += 1;
	} else if (event.target.className === "slider__btn btn--left") {
		id -= 1;
	}

	if (id >= refs.slider.length) {
		id = 0;
	} else if (id < 0) {
		id = 4;
	}
	const nextSlide = refs.slider[id];

	nextSlide.classList.remove("display-none");
}

function addClassName(id) {
	refs.slider[id].classList.add("display-none");
}

setInterval(() => {
	addClassName(id);
	id += 1;
	if (id >= refs.slider.length) {
		id = 0;
	} else if (id < 0) {
		id = 4;
	}
	const nextSlide = refs.slider[id];

	nextSlide.classList.remove("display-none");
}, 4000);
