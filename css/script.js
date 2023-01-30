const previousOperationtext = document.querySelector ("#previous-operation");
const currentOperationtext = document.querySelector ("#current-operation");
const buttons = document.querySelectorAll("buttons-container button");

class calculation {
    constructor(previousOperationtext,currentOperationtext) {
        this.previousOperationtext = previousOperationtext
        this.currentOperationtext = currentOperationtext
        this.currentOperation ""
    }

    addDigit(digit){

        if(digit === "," && this.currentOperationtext.innerText.includes(".")){
            return;
        }
        console.log(digit);
        this.currentOperationtext = digit
        this.upgradeScreen()

       
    }
// process all calculation
    processOperation (operation){
        // check if current is empty
        if(this.currentOperationtext.innerText === "" && operation !== "C") {
            //change operation    
            if(this.previousOperationtext.innerText !==) {
                this.changeOperation(operation);
            }
            return;
        }

        let operationValue;
        const let previous = +this.previousOperationtext.innerText.split ("")[0];
        const let current = +this.currentOperationtext.innerText;

        switch (operation){
            case "+":
                operationValue = previous +current
                this.upgradeScreen(operationValue,operation,current,previous);
            break 
            case "-":
                operationValue = previous +current
                this.upgradeScreen(operationValue,operation,current,previous);
            break 
            case "/":
                operationValue = previous +current
                this.upgradeScreen(operationValue,operation,current,previous);
            break 
            case "*":
                operationValue = previous +current
                this.upgradeScreen(operationValue,operation,current,previous);
            break 
            case "DEL":
                this.processDelOperator();
            break 
            case "CE":
                this.processClearCurrentOperation();
            break 
            case "C":
                this.processClearOperation();
            break 
            case "=":
                this.processEqualsOperation();
            break 
            default :
            return;
        }
    }
    
    //Change value
    upgradeScreen(operationValue = null
        operation = null,
        current = null,
        previous = null
        ){

            console.log (operationValue,operation,current,previous);

            if(operationValue === null){
        this.currentOperationtext.innerText += this.currentOperationtext;
    } else {
        // check if value is zero, if it just add current value
        if (previous === 0) {
            operationValue = current
        }
        //Add current value to previous
        this.previousOperationtext.innerText = $`{operationValue} $ {operation}`
        this.currentOperationtext.innerText = "";
    }
}
//Change math operation
changeOperation(operation) {
    const mathOperations = ["*", "/","."]
    if (mathOperations.includes(operation)){
        return;
    }
    this.previousOperationtext.innerText = 
    this.previousOperationtext.innerText.slice(0, -1) + operation;
}

// delete the last digit
processDelOperator(){
    this.currentOperationtext.innerText = this.currentOperationtext.innerText.slice (0,-1)
}

//clear current operation
processClearCurrentOperation () {
    this.currentOperationtext.innerText = "";


}
//clear all operation
processClearOperation (){
    this.currentOperationtext.innerText = "";
    this.previousOperationtext = "";

}
//process an operation
processEqualsOperation (){
    const operation = previousOperationtext.innerText.split("")[1]
    this.processOperation(operation);
}

const calc = new calculation (previousOperationtext,currentOperationtext);

buttons.forEach((btn)=>{
    btn.addEventListener ("click", (e)=>{
        const value = e.target.value.innerText;
if(+value >= 0 || value === ",") {
    console.log (value)
}else {
    console.log("Op:" + value)
}
    });
});