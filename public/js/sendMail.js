document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    sendMail();
});

function sendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    }

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    })
    .then(response => response.json())
    .then(data => alert('Success!'))
    .catch((error) => {
        console.error('Error:', error);
    });
}