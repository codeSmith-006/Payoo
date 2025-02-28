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
        if (parseInt(pinNumber) === 1234) {

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


document.getElementById("cash-out-btn").addEventListener("click", (event) => {
    document.getElementById("add-money").style.display = 'none';
    document.getElementById("transaction").style.display = 'none';
    document.getElementById("cash-out").style.display = 'block';

})

// creating cashuot history button

document.getElementById("cash-out-btn").addEventListener("click", (event) => {

    event.preventDefault();

    // creating a dateTime value to add in the history
    let dateTime = new Date().toLocaleString();

    // create a div where i put the only show history
    let transactionHistory = document.createElement("div");
    // adding some padding in each transaction
    transactionHistory.classList.add("pb-2");
    // then just copy paste the html from the html section
    transactionHistory.innerHTML = `
                    <div id="transaction-div" class="flex gap-2 items-center bg-white p-4 rounded-xl">
                        <img src="asset/wallet 1.png" alt="">

                        <!-- text -->
                        <div id="nameDiv">
                            <!-- bill name -->
                            <h1 class="font-outfit font-semibold text-[#080808] opacity-70 text-left">Cash Out
                            </h1>

                            <!-- time -->
                            <p class="font-outfit text-xs text-[#080808] opacity-70">${dateTime}</p>
                        </div>
                    </div>
    `
    document.getElementById("transaction-content").appendChild(transactionHistory);

})