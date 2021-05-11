const rTopLeft = document.querySelector('input[name=radius-t-l]');
const rTopRight = document.querySelector('input[name=radius-t-r]');
const rBottomLeft = document.querySelector('input[name=radius-b-l]');
const rBottomRight = document.querySelector('input[name=radius-b-r]');



const kotak = document.querySelector('.kotak');

const tl = document.getElementById('#tl');
const tr = document.getElementById('#tr');
const bl = document.getElementById('#bl');
const br = document.getElementById('#br');

rTopLeft.addEventListener('input', function(){
	kotak.style.borderTopLeftRadius = rTopLeft.value+'px';
	tl.innerHTML = rTopLeft.value;
	//debug
	// console.log(tl);
});

rTopRight.addEventListener('input', function(){
	kotak.style.borderTopRightRadius = rTopRight.value+'px';
	tr.innerHTML = rTopRight.value;
	//debug
	// console.log(radius);
});

rBottomLeft.addEventListener('input', function(){
	kotak.style.borderBottomLeftRadius = rBottomLeft.value+'px';
	bl.innerHTML = rBottomLeft.value;

	//debug
	// console.log(radius);
});

rBottomRight.addEventListener('input', function(){
	kotak.style.borderBottomRightRadius = rBottomRight.value+'px';
	br.innerHTML = rBottomRight.value;
	//debug
	// console.log(radius);
});

const tinggi = document.querySelector('input[name=tinggi]');
const lebar = document.querySelector('input[name=lebar]');

tinggi.addEventListener('input', function(){
	kotak.style.height = tinggi.value+'px';
});
lebar.addEventListener('input', function(){
	kotak.style.width = lebar.value+'px';
});

const colorP = document.querySelector('input[name=colorP]');
colorP.addEventListener('input', function(){
	kotak.style.backgroundColor = colorP.value;
});




























