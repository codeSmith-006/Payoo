// fetch the cash out button

document.getElementById("withdraw-btn").addEventListener("click", (event) => {
    // preventing the default reload of withdraw button
    event.preventDefault();

    // fetch the account number field
    const agentNumber = document.getElementById("agent-number").value;

    // fetch the pin number field
    const pinNumber = document.getElementById("pin-number-cashout").value;
    console.log(pinNumber);

    // fetch the amount of add money
    const withdrawAmount = document.getElementById("withdraw-money").value;
    console.log(withdrawAmount);

    // fetch the available balance
    const availableBalance = document.getElementById("available-balance").innerText;
    console.log(availableBalance);

    // checking account validity
    if (agentNumber.length === 11) {
        if(parseInt(pinNumber) === 1234) {

            // check that if the amount is not empty
            // if (!addMoneyAmount.value.trim()) {
            //     // prevent the empty amount
            //     alert("Please enter a amount"); 
            // }


            let newBalance = parseInt(availableBalance) - parseInt(withdrawAmount);
            console.log(typeof newBalance);
            console.log(newBalance);

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