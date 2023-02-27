function getElementById(id){
    let element = document.getElementById(id);
    let elementTextByString = element.innerText;
    let elementTextByNumber = parseFloat(elementTextByString);
    return elementTextByNumber;
}

function getInputById(id){
    const inputField = document.getElementById(id);
    const inputValueByString = inputField.value;
    const inputValueByNumber = parseFloat(inputValueByString);
    
    return inputValueByNumber;
}
