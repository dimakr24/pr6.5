function calculateSum() {
	// Отримання значень введених користувачем чисел
	const num1 = parseFloat(document.getElementById('number1').value);
	const num2 = parseFloat(document.getElementById('number2').value);

	// Перевірка чи введені числа є дійсними
	if (isNaN(num1) || isNaN(num2)) {
			alert('Будь ласка, введіть коректні числа');
			return;
	}

	// Обчислення суми
	const sum = num1 + num2;

	// Виведення результату в діалоговому вікні
	alert(`Сума: ${sum}`);

	// Виведення результату в окремому полі
	document.getElementById('result').innerText = `Сума: ${sum}`;
}
