form.addEventListener("submit", () => {
    const userName = document.getElementById('name').value;
    const role = document.querySelector('input[name="role"]:checked').value;
    const signup = {
        name: userName,
        email: email.value,
        password: password.value,
        role: role
    }
    fetch("/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(signup)
    }).then(res => res.json())
    .then(data => {
        if(data.status == "error"){
            success.style.display = "none"
            error.style.display = "block"
            error.innerText = data.error
        } else {
            error.style.display = "none"
            success.style.display = "block"
            success.innerText = data.success
        }
    })
})
