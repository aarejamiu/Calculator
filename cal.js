
let screen2Clear = false;

let message;
let getFirstVal;

function numberDisplay(numbers){
    screen2.value += numbers;

    if(screen2Clear){
        console.log(screen2Clear);
        
        screen2.value = numbers;
        screen2Clear = false;
    }

   
};


function operators(oper){

    message = oper;
    getFirstVal = screen2.value;
    screen1.value = getFirstVal + message;

    screen2Clear = true;
   
    
    

};

function equals(){
    if(message == '+'){
        screen1.value = getFirstVal + message + screen2.value+ '=';
        screen2.value = Number(getFirstVal) + Number(screen2.value);
    }
    else if(message == '-'){
        screen1.value = getFirstVal + message + screen2.value + '=';
        screen2.value = getFirstVal - screen2.value
    }
    else if(message == 'x'){
        screen1.value = getFirstVal + message + screen2.value + '=';
        screen2.value = getFirstVal * screen2.value;
    }
    else if(message == '÷'){
        if (screen2.value == 0) {
            alert('Undefined')
        }
        else{
        screen1.value = getFirstVal + message + screen2.value + '=';
        screen2.value = getFirstVal / screen2.value;
        }
    }
    else if (message == '%') {
        screen1.value = getFirstVal + message + '=';
        screen2.value = (getFirstVal / 100) * screen2.value;
    }
    else if (message == '^') {
        screen1.value = getFirstVal + message + screen2.value + '=';
        screen2.value = getFirstVal ** screen2.value;
    }
    else if (message == '✓') {
        if (screen2.value < 0) {
            alert('Error');
        }
        else {
            screen1.value = message + screen2.value + '=';
            screen2.value = Math.sqrt(screen2.value);
        }
    }
    else if (message == '1/x') {
        if (screen2.value == 0) {
            alert('Undefined');
        }
        else {
            screen1.value = message + screen2.value + '=';
            screen2.value = 1 / screen2.value;
        }
    }
};
function backSpace() {
    if (screen2Clear == true) {
        return;
    } else {
        screen2.value = screen2.value.slice(0, -1);
    }
}
function clearButton() {
    if (screen2Clear == true) {
        return
    }
    else {
        screen2.value = '';
    }
}
function clean() {
    if (screen2Clear == true) {
        return
    }
    else {
        screen2.value = '';
        screen1.value = '';
    }
}
function decimal(deci){
    screen2.value += deci;
}
let memory = screen2.value;

function memo() {
    if (memo == 'MC') {
        memory = '';
    }
    else if (memo == 'MR') {
        screen2.value = memory;
    }
    else if (memo == 'M+') {
        memory += screen2.value 
    }
    else if (memo == 'M-') {
        memory -= screen2.value;
    }
    else if (memo == 'MS') {
        memory = screen2.value;
    }
}