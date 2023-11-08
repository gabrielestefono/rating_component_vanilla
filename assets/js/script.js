let notaQuery = document.querySelectorAll('.nota');
let nota = Array.from(notaQuery);

nota.forEach((element) => {
	element.addEventListener('click', () => {
		nota.forEach(el => {
			if(element != el){
				el.classList.remove('nota--active');
			}else{
				el.classList.add('nota--active');
			}
		})
	});
});

let thanks = document.getElementById('thanks');
thanks.style.display = 'none';