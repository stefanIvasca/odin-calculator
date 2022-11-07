function operate(operator,firstNum,secondNum){
    if(operator==='+'){
        return firstNum+secondNum;
    }else if(operator==='-'){
        return firstNum-secondNum;
    }else if(operator==='*'){
        return firstNum*secondNum;
    }else if(operator==='/'){
        return firstNum/secondNum;
    }
}

let id=document.querySelectorAll('button');
let screenValue=document.querySelector('.eventDisplay');
let result=document.querySelector('.result');

let firstNum='';
let secondNum='';
let operator='';


function displayValue(indexNum){
    if (operator===''){
    firstNum+=id[indexNum].innerText;
    screenValue.innerText=firstNum;
    }else{
    secondNum+=id[indexNum].innerText;
    screenValue.innerText=secondNum;
    }
}

function displayOperator(indexNum){
    screenValue.innerText=id[indexNum].innerText;
    operator=id[indexNum].innerText;
    console.log(operator);
}

function clearDisplay(){
    screenValue.innerText='';
    firstNum='';
    secondNum='';
    operator='';
    result.innerText='';

}

function returnResult(){
    if(operator==='+'){
        result.innerText= +firstNum+ +secondNum;
    }else if(operator==='−'){
        result.innerText= +firstNum- +secondNum;
    }else if(operator==='×'){
        result.innerText= +firstNum* +secondNum;
    }else if(operator==='÷'){
        result.innerText= +firstNum/ +secondNum;
    }
}
