window.addEventListener('load', function() {
    const generateBtn = document.getElementById('generateBtn');

    generateBtn.addEventListener('click', () => {
        const digits = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let serial = '';

        for (let i = 0; i < 10; i++) {
            let rand = Math.floor(Math.random() * digits.length);
            serial += digits[rand];
        }

        fetch('/api/serials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ serial: serial }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            
            window.location.href = '/generated?serial=' + serial;
        })
        .catch((error) => console.error('Error:', error));
    });
});