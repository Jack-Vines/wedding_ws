const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();



button.addEventListener('click', (e) => {
    jsConfetti.addConfetti({
        emojis: ['🍾', '🏄‍♂️', '🏄‍♀️', '🌊', '🏖', '🍹'],
    }).then(() => jsConfetti.addConfetti({
        confettiColors: [
          '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
      })
    ).then(() => jsConfetti.addConfetti())
    // e.preventDefault();
     // Hide first view
    document.getElementById('rsvp-form').style.display = 'none';
    // Show thank you message element
    document.getElementById('thank_you').style.display = 'block';
})
