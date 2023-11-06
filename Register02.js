document.getElementById("container-form").addEventListener("submit", function(event) {
    event.preventDefault()

    let fullname = document.getElementById("fullname").value
    let email = document.getElementById("email").value
    let phonenumber = document.getElementById("phonenumber").value
    let password = document.getElementById("password").value
    let cfpassword = document.getElementById("cfpassword").value

    if (cfpassword !== password) {
        alert("Password do not match. Please try again.")
    } else {
        alert("Register Seuccessfuly!\nName: " + fullname + "\nEmail :" + email + "\nPhonenumber :" + phonenumber + "\nPassword :" + password + "\nConfirm Password :" + cfpassword)

        document.getElementById("fullname").value = ""
        document.getElementById("email").value = ""
        document.getElementById("phonenumber").value = ""
        document.getElementById("password").value = ""
        document.getElementById("cfpassword").value = ""
    }
});