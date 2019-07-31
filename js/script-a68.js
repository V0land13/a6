let progress68 = 0;

function plus1pecent() {
	if (progress68 < 100) {
		progress68 = progress68 + 1;
		pr68 = progress68 + '%';
		document.getElementById("progressbar1").style.width = pr68;
		console.log(pr68);
		console.log(progress68);
}	else{
		alert( 'Перестарался, слишком много процентов, 100 у нас максимум!' );}
}

function plus3pecent() {
	if (progress68 < 98) {
		progress68 = progress68 + 3;
		pr68 = progress68 + '%';
		document.getElementById("progressbar1").style.width = pr68;
		console.log(pr68);
		console.log(progress68);
}	else{
		alert( 'Перестарался, слишком много процентов, 100 у нас максимум!' );}
}

function plus7pecent() {
	if (progress68 < 94) {
		progress68 = progress68 + 7;
		pr68 = progress68 + '%';
		document.getElementById("progressbar1").style.width = pr68;
		console.log(pr68);
		console.log(progress68);
}	else{
		alert( 'Перестарался, слишком много процентов, 100 у нас максимум!' );}
}


document.getElementById('plus1').onclick = plus1pecent;

document.getElementById('plus3').onclick = plus3pecent;

document.getElementById('plus7').onclick = plus7pecent;
