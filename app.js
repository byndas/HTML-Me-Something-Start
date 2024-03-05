const btnTab1 = document.getElementById('btn-tab1');
const btnTab2 = document.getElementById('btn-tab2');
const img1 = document.getElementById('gif1');
const img2 = document.getElementById('gif2');

btnTab1.addEventListener('click', function() {
	img1.classList.remove('hidden');
	img2.classList.add('hidden');
});

btnTab2.addEventListener('click', function() {
	img1.classList.add('hidden');
	img2.classList.remove('hidden');
});