// import {addMoneyAmount} from 'script/addMoney.js';


// fetching the transaction button

document.getElementById("transaction-btn").addEventListener("click", () => {
    document.getElementById("add-money").style.display = 'none';
    document.getElementById("cash-out").style.display = 'none';
    document.getElementById("transaction").style.display = 'block';

})

document.getElementById("addMoneyBtn").addEventListener("click", (event) => {

    event.preventDefault();
    // create a div where i put the only show history
    let transactionHistory = document.createElement("div");
    // adding some padding in each transaction
    transactionHistory.classList.add("pb-2");

    // creating a dateTime value to add in the history
    let dateTime = new Date().toLocaleString();
    console.log(dateTime);
    // then just copy paste the html from the html section
    transactionHistory.innerHTML = `
                    <div id="transaction-div" class="flex gap-2 items-center bg-white p-4 rounded-xl">
                        <img src="asset/wallet 1.png" alt="">

                        <!-- text -->
                        <div id="nameDiv">
                            <!-- bill name -->
                            <h1 class="font-outfit font-semibold text-[#080808] opacity-70 text-left">Add Money
                            </h1>

                            <!-- time -->
                            <p id="date-time" class="font-outfit text-xs text-[#080808] opacity-70">${dateTime}</p>
                        </div>
                    </div>
    `
    document.getElementById("transaction-content").appendChild(transactionHistory);

})