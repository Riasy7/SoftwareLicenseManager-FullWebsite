document.getElementById('softwareForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    var softwareName = document.getElementById('softwareName').value;
    var licensingType = document.getElementById('licensingType').value;
    var purchaseDate = document.getElementById('purchaseDate').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cost = document.getElementById('cost').value;

    // Generate a random serial number
    const digits = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let serialNumber = '';
    for (let i = 0; i < 10; i++) {
        let rand = Math.floor(Math.random() * digits.length);
        serialNumber += digits[rand];
    }

    // Send a request to your server to store the new software license in the SQL database
    fetch('/api/licenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ softwareName: softwareName, licensingType: licensingType, purchaseDate: purchaseDate, expiryDate: expiryDate, cost: cost, serial: serialNumber }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        window.location.href = '/softwarelicenses'; // Redirect to softwarelicenses.html
    })
    .catch((error) => console.error('Error:', error));
});