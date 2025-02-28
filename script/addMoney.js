// fetch the add money button

document.getElementById("addMoneyBtn").addEventListener("click", (event) => {
    // preventing the default reload of add money button
    event.preventDefault();

    // fetch the account number field
    const bankNumber = document.getElementById("bank-number").value;

    // fetch the pin number field
    const pinNumber = document.getElementById("pin-number").value;


    // fetch the amount of add money
    const addMoneyAmount = document.getElementById("add-money-form").value;


    // fetch the available balance
    const availableBalance = document.getElementById("available-balance").innerText;


    // checking account validity
    if (bankNumber.length === 11) {
        if(parseInt(pinNumber) === 1234) {

            // check that if the amount is not empty
            // if (!addMoneyAmount.value.trim()) {
            //     // prevent the empty amount
            //     alert("Please enter a amount"); 
            // }


            let newBalance = parseInt(availableBalance) + parseInt(addMoneyAmount);


            document.getElementById("available-balance").innerText = parseInt(newBalance);
        }
        else {
            alert("Incorrect Pin")
        }
    }

    else {
        alert("Enter a valid account number")
    }
})


// doing action when the add money botton will clicked

document.getElementById("cash-out").style.display = 'none';
document.getElementById("transaction").style.display = 'none';



document.getElementById("add-money-btn").addEventListener("click", () => {
    document.getElementById("add-money").style.display = 'block';
    document.getElementById("cash-out").style.display = 'none';
    document.getElementById("transaction").style.display = 'none';

})




