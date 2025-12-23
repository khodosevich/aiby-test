export const buttonsHandler = () => {
	const continueBtn = document.getElementById("continue-btn");
	const planButtons = document.querySelectorAll(".banner__btn-switch");

	planButtons.forEach(button => {
		button.addEventListener("click", function (event) {
			event.preventDefault();

			resetBtn(planButtons);

			this.classList.add("active");
		});
	});

	continueBtn.addEventListener("click",() => {
		resetBtn(planButtons);
	});
};

const resetBtn = (planButtons) => {
	planButtons.forEach(button => {
		button.classList.remove("active");
	});
};