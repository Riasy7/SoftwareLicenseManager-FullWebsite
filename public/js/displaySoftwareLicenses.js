window.onload = function() {
    fetch('/api/licenses')
    .then(response => response.json())
    .then(data => {
        var table = document.getElementById('softwareTable').getElementsByTagName('tbody')[0];
        data.forEach(item => {
            var row = `
              <tr>
                <td>${item.software_name}</td>
                <td>${item.serial}</td>
                <td>${item.licensing_type}</td>
                <td>${item.purchase_date}</td>
                <td>${item.expiry_date}</td>
                <td>${item.cost}</td>
                <td><button class="btn btn-danger delete-btn" data-serial="${item.serial}">Delete</button></td>
              </tr>
            `;
            table.innerHTML += row;
        });
        // Add event listeners to delete buttons after all rows have been added
        document.querySelectorAll('.delete-btn').forEach(function(button) {
            button.addEventListener('click', function() {
                var serial = this.getAttribute('data-serial');
                fetch('/delete-serial', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ serial: serial }),
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Remove the row from the table
                        this.parentNode.parentNode.remove();
                    }
                });
            });
        });
    })
    .catch((error) => console.error('Error:', error));
};