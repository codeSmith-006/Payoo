// fetching the transaction button

document.getElementById("transaction-btn").addEventListener("click", () => {
    document.getElementById("add-money").style.display = 'none';
    document.getElementById("cash-out").style.display = 'none';
    document.getElementById("transaction").style.display = 'block';

})

let count = 1;

document.getElementById("addMoneyBtn").addEventListener("click", (event) => {
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
                            <h1 class="font-outfit font-semibold text-[#080808] opacity-70 text-left">Electricity Bill
                            </h1>

                            <!-- time -->
                            <p class="font-outfit text-xs text-[#080808] opacity-70">Today 01:44 AM</p>
                        </div>
                    </div>
    `

    document.getElementById("transaction-content").appendChild(transactionHistory);

    history.appendChild(transactionDiv);
})