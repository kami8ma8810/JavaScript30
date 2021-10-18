window.addEventListener('keydown', function (e) {
	console.log(e.code);
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  console.log(audio);
});
