const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click', (e) => {
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    }).then(() => jsConfetti.addConfetti()
    )
    // e.preventDefault();
     // Hide first view
    document.getElementById('rsvp-form').style.display = 'none';
    // Show thank you message element
    document.getElementById('thank_you').style.display = 'block';
})

window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
    });
  });

  var nextStep = document.querySelector('#close');
              
  nextStep.addEventListener('click', function (e) {
    e.preventDefault();
    // Hide first view
    document.getElementById('my_form').style.display = 'block';

    // Show thank you message element
    document.getElementById('thank_you').style.display = 'none';
  });