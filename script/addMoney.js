// fetch the add money button

document.getElementById("addMoneyBtn").addEventListener("click", (event) => {
    // preventing the default reload of add money button
    event.preventDefault();

    // fetch the account number field
    const bankNumber = document.getElementById("bank-number").value;

    // fetch the pin number field
    const pinNumber = document.getElementById("pin-number").value;
    console.log(pinNumber);

    if (bankNumber.length === 11) {
        if(parseInt(pinNumber) === 1234) {
            
        }
        else {
            alert("Incorrect Pin")
        }
    }

    else {
        alert("Enter a valid account number")
    }
})