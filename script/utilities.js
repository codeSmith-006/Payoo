//  give the function an id and this will return a integer value

function valueToIntText(id) {
    return parseInt(document.getElementById(id).innerText);
}

function valueToIntInput(id) {
    return parseInt(document.getElementById(id).value);
}

// checking if a account valid or not and if valid then change the money section with new value

function checkValidity(number, pinNumber, condition, idForChangeValue, idForText, idForInput) {
    if (number.length === 11) {
        if (pinNumber === 1234) {

            // check that if the amount is not empty
            // if (!addMoneyAmount.value.trim()) {
            //     // prevent the empty amount
            //     alert("Please enter a amount"); 
            // }




            if (condition === "add") {
                let newBalance = valueToIntText(idForText) + valueToIntInput(idForInput);

                document.getElementById(idForChangeValue).innerText = parseInt(newBalance);
            }

            else if (condition == "out") {
                let newBalance = valueToIntText(idForText) + valueToIntInput(idForInput);


                document.getElementById(idForChangeValue).innerText = parseInt(newBalance);
            }
        }
        else {
            alert("Incorrect Pin")
        }
    }

    else {
        alert("Enter a valid account number")
    }
}

