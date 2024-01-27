window.addEventListener('load', function() {
    fetch('/api/getUserData')
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            document.querySelector('img').src = data.user.profilePicture;
        } else {
            console.error('Error:', data.error);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('profilePicture', document.getElementById('profilePicture').files[0]);

        fetch('/api/uploadProfilePicture', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                document.querySelector('img').src = data.path;
                success.style.display = "block";
                error.style.display = "none";
                success.innerText = "Profile picture updated successfully!";
            } else {
                error.style.display = "block";
                success.style.display = "none";
                error.innerText = data.error;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});