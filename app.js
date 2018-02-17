window.SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

rec.addEventListener('result', event => {
	const transcript = Array.from(event.results)
		.map(result => result[0])
		.map(result => result.transcript)
		.join(' ');

	if (event.results[0].isFinal) {
		p = document.createElement('p');
		words.appendChild(p);
	}

	if (transcript.toLowerCase().includes('скажи погоду на завтра')) {
		console.log('Погода в Боровичах -1 C');
	}

	p.textContent = transcript;
});

rec.addEventListener('end', rec.start);

rec.start();
