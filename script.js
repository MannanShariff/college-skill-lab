const form = document.getElementById('contactForm');
const responseMsg = document.getElementById('responseMsg');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const number = document.getElementById('number').value.trim();

    if (name && email && message) {
        responseMsg.innerHTML = 'Thank you for your message, ' + name + '!<br>' +
                        'Name: ' + name + '<br>' +
                        'Email: ' + email + '<br>' +
                        'Number: ' + number + '<br>' +
                        'Message: ' + message;
        responseMsg.style.color = 'green';
        form.reset();
    } else {
        responseMsg.textContent = 'Please fill out all fields.';
        responseMsg.style.color = 'red';
    }
});
