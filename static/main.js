function generateRandomNumbers(min, max, count) {
	const numbers = [];
	for (let i = 0; i < count; i++) {
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		if (numbers.includes(randomNumber)) {
			i--;
		}
		numbers.push(randomNumber);
	}
	return numbers;
}

document.addEventListener("DOMContentLoaded", function () {
	const numbersElement = document.querySelectorAll("#number1, #number2, #number3, #number4, #number5, #number6");
	const button = document.getElementById("button-19");

    button.addEventListener("click", () => {
        const randomNumbers = generateRandomNumbers(1, 49, 6);
        randomNumbers.forEach((number, index) => {
            numbersElement[index].textContent = number;
        });
    });

	console.log(generateRandomNumbers(1, 49, 6));
});
