function sendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    }

   emailjs.send("service_4irvdoa", "template_clof81i", params).then(function (res) {
        alert("Success! " + res.status);
    })

    console.log("Success");
}