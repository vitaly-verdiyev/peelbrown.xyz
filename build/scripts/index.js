window,addEventListener("DOMContentLoaded", () => {
	document.querySelector(".burger").addEventListener("click", function() {
		this.classList.toggle("burger--active");
		document.querySelector("nav.nav").classList.toggle("mobile-menu");
	});
});