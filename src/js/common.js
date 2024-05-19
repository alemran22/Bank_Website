// input
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputString = inputField.value;
    const input = parseFloat(inputString);
    return input;
};

// element
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementNumber = parseFloat(elementString);
    return elementNumber;
};

// set value

function setValue(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
};

console.log("hello");