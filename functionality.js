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
    }
    else if(operator!==''&&result.innerText!==''){
        firstNum=+result.innerText;
        secondNum+=id[indexNum].innerText;
        screenValue.innerText=secondNum;
    }else{
        secondNum+=id[indexNum].innerText;
        screenValue.innerText=secondNum;
    }
}

function displayOperator(indexNum){
    screenValue.innerText=id[indexNum].innerText;//display symbol
    operator=id[indexNum].innerText;
    secondNum='';//reset second num
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
        result.innerText=Math.round((+firstNum+ +secondNum)*100)/100;
    }else if(operator==='−'){
        result.innerText=Math.round(( +firstNum- +secondNum)*100)/100;
    }else if(operator==='×'){
        result.innerText=Math.round(( +firstNum* +secondNum)*100)/100;
    }else if(operator==='÷'){
        result.innerText=Math.round(( +firstNum/ +secondNum)*100)/100;
    }
}
