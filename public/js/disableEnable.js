document.querySelectorAll('.btn, .delete-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var serial = this.getAttribute('data-serial');
        var action = this.textContent.toLowerCase();

        if (action === 'delete') {
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
                    var row = this.parentNode.parentNode;
                    row.parentNode.removeChild(row);
                } else {
                    alert('Failed to delete serial');
                }
            });
        }
    });
});