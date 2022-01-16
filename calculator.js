console.log("Clacultor");

var number1 ="";
var number2 = "";
var operator ="";

function setOperator(new_operator){
    operator = new_operator;
}

function concatNumber(single_digit){
    if(operator == ""){
        number1 = number1 + single_digit;
        display(number1)
    }else{
        number2 = number2 + single_digit;
        display(number2);
    }
}

function clearAll(){
    if(operator == ""){
        number1 = "";
        display(number1);
    }else{
        number2 = "";
        display(number2);

    }
}


function equals(){
    if(operator =="*"){
        number1 = mul(number1,number2);
        number2 = "";
        operator = "";
        display(number1);
    } 
    else if(operator =="+"){
        number1 = add(number1,number2);
        number2 = "";
        operator = "";
        display(number1);
    }else if(operator =="-"){
        number1 = sub(number1,number2);
        number2 = "";
        operator = "";
        display(number1);
    }else if(operator =="/"){
        number1 = div(number1,number2);
        number2 = "";
        operator = "";
        display(number1);
    }else if(operator =="%"){
        number1 = per(number1,number2);
        number2 = "";
        operator = "";
        display(number1);
    }
}


function add(num1, num2){
    num1 = parseInt(num1);
    num2 =parseInt(num2);
    var sum = num1+num2;
    return sum;
}

function sub(num1, num2){
    num1 = parseInt(num1);
    num2 =parseInt(num2);
    var subtract = num1-num2;
    return subtract;
}

function mul(num1, num2){
    num1 = parseInt(num1);
    num2 =parseInt(num2);
    var multiple = num1*num2;
    return multiple;
}

function div(num1, num2){
    num1 = parseInt(num1);
    num2 =parseInt(num2);
    var divide = num1/num2;
    return divide;
}
function per(num1, num2){
    num1 = parseInt(num1);
    num2 =parseInt(num2);
    var percentage = num1%num2;
    return percentage;
}



function display(num){
    var para = document.getElementById('screen');
    para.innerText = num;
}