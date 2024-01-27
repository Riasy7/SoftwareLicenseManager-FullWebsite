form.addEventListener("submit", () => {
    const login = {
        email: email.value,
        password: password.value
    }
    fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(login)
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
