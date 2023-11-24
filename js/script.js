function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const InputAmountText = inputField.value;
    const inputValue = parseFloat(InputAmountText);
    // inputField.value = '';
    return inputValue;
}

function calculateExpense(inputFood, inputRent, inputCloth, inputIncome){
    const rentValue = getInputValue(inputFood);
    const foodValue = getInputValue(inputRent);
    const clothValue = getInputValue(inputCloth);
    const totalExpense = rentValue + foodValue + clothValue;
    const incomeValue = getInputValue(inputIncome);
    const totalBalance = incomeValue - totalExpense;
    if(incomeValue > totalExpense && incomeValue > 0 && !isNaN(incomeValue)){
        document.getElementById('total-expense').innerText = totalExpense;
        document.getElementById('balance').innerText = totalBalance;
    }
    else{
        document.getElementById('error').style.display = 'block';
    }

}

function calculateSavings(inputIncome, inputSave, inputFood, inputRent, inputCloth){
    const incomeValue = getInputValue(inputIncome);
    const savingValue = getInputValue(inputSave);
    const calculateSaving = (incomeValue * savingValue) / 100;
    document.getElementById('saving-amount').innerText = calculateSaving;
    const rentValue = getInputValue(inputFood);
    const foodValue = getInputValue(inputRent);
    const clothValue = getInputValue(inputCloth);
    const totalExpense = rentValue + foodValue + clothValue;
    const totalBalance = incomeValue - totalExpense;
    const remainingBalance = totalBalance - calculateSaving;
    document.getElementById('remaining-balance').innerText = remainingBalance;
}



