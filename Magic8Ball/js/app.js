const answers = [
  "Yes", "No", "Maybe", "Possibly", "Likely",
  "No way", "Hard to say", "Don't bother",
  "Probably", "Try it",
  "Luckily", "Yep",
  "Yes, but", "?"
];

function getResponse() {
  const answerPicker = Math.floor(Math.random() * answers.length);
  document.getElementById("answer").innerText = answers[answerPicker];

  anime({
    targets: '.magicBall',
    translateX: [
      { value: 30, duration: 100, easing: 'easeInOutSine' },
      { value: -30, duration: 100, easing: 'easeInOutSine' },
      { value: 0, duration: 100, easing: 'easeInOutSine' }
    ],
    rotate: [
      { value: '1turn', duration: 250, easing: 'easeInOutSine' }
    ],
  });
}

window.getResponse = getResponse;
