window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	// 0 обозначить переменные 
	let textarea = document.querySelector('.in_text'),
		textOut = document.querySelector('.out_text'),
		textareaDecoded = document.querySelector('.in_coded_text'),
		textOutDecoded = document.querySelector('.out_coded_text');

	// кодирование текста 
	textarea.addEventListener('input', function () {
		let str = this.value;
		const offset = 10;
		let out = '';

		// перебор слова 
		for (let i = 0; i < str.length; i++) {
			// переводим букву в символ в цифрах
			let code = str.charCodeAt(i);

			// добавляем к полученной цифре смещение 
			code = code + offset;

			// записываем новый символ но новой цифре в переменную
			out += String.fromCharCode(code);
		}
		
		// записываем результат 
		textOut.textContent = out;

	});

	// декодирование текста 
	textareaDecoded.addEventListener('input', function () {
		let str = this.value;
		const offset = 10;
		let out = '';

		// перебор слова 
		for (let i = 0; i < str.length; i++) {
			// переводим букву в символ в цифрах
			let code = str.charCodeAt(i);

			// добавляем к полученной цифре смещение 
			code = code - offset;

			// записываем новый символ но новой цифре в переменную
			out += String.fromCharCode(code);
		}

		// записываем результат 
		textOutDecoded.textContent = out;

	});

});