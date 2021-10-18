function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //トランスフォーム以外の処理は行わない
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);

  if (!audio) return; // audioに定義されていないキーを押した場合は処理をしない
  key.classList.add('playing');
  audio.currentTime = 0; //即時にキーを押したときの遅延をなくす
  audio.play(); //HTMLMediaElement.play()
  /*
	参照 https://developer.mozilla.org/ja/docs/Web/API/HTMLMediaElement/play
	 */
}

// すべてのキーに対してtransitionendのタイミングでremoveTransitonの処理をするイベントを設定
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
});

// 実行
window.addEventListener('keydown', playSound);
