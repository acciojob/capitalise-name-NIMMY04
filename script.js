const inputElement = document.getElementById('fname');
inputElement.addEventListener('blur', () => {
	inputElement.value = inputElement.value.toUpperCase();
})
