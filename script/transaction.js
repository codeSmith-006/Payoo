// fetching the transaction button

document.getElementById("transaction-btn").addEventListener("click", () => {
    document.getElementById("add-money").style.display = 'none';
    document.getElementById("cash-out").style.display = 'none';
    document.getElementById("transaction").style.display = 'block';

})

let count = 1;

document.getElementById("addMoneyBtn").addEventListener("click", (event) => {
    event.preventDefault();

    const transactionDiv = document.getElementById("transaction-div");
    
    console.log(transactionDiv);

    const nameDiv = document.getElementById("nameDiv");

    nameDiv.innerHTML = "";

    console.log(nameDiv);

    const h1 = document.createElement("h1");

    h1.innerText = "Electricity Bill";
    h1.classList.add("font-outfit", "font-semibold", "text-[#080808]", "opacity-70", "text-left");

    const transactionHistory = document.getElementById("transaction-history");

    nameDiv.appendChild(h1);
    count++;
    console.log(count);
})