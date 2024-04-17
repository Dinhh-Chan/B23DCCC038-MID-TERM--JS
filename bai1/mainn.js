function performCalculation(operation) {
    const inputA = document.getElementById('inputA').value;
    const inputB = document.getElementById('inputB').value;

    if (!inputA || !inputB || isNaN(inputA) || isNaN(inputB)) {
        alert('Please enter valid numbers in both inputs.');
        return;
    }

    let result;
    switch(operation) {
        case 'add':
            result = Number(inputA) + Number(inputB);
            break;
        case 'subtract':
            result = Number(inputA) - Number(inputB);
            break;
        case 'multiply':
            result = Number(inputA) * Number(inputB);
            break;
        case 'divide':
            if (inputB == 0) {
                alert('Cannot divide by zero.');
                return;
            }
            result = Number(inputA) / Number(inputB);
            break;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}

function resetInputs() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('result').innerText = '';
}
   