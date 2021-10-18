window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  // audioに定義されていないキーを押した場合は処理をしない
  // console.log(audio);
  if (!audio) return;

	audio.currentTime = 0;
  audio.play();
});