// fetch the login button

document.getElementById("login-btn").addEventListener("click", (event) => {
    // prevent the default reload behaviour of login button
    event.preventDefault();

    // fetch the phone number value
    const phoneNumber = document.getElementById("phone-number").value;

    // fetch the pin number
    const pinNumber = document.getElementById("pin-number").value;

    // user account check

    if(phoneNumber.length === 11) {
        if(parseInt(pinNumber) === 1234) {
            window.location.href = "./add-money.html";
        }

        else {
            alert("Incorrect pin")
        }
    }
    else{
        alert("Enter a valid account number")
    }

    // fetch amount
     
});