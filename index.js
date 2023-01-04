const display = document.querySelector('#display')
const btn = document.querySelector('#buttonContainer');
const allClear = document.querySelector('[data-allClear]')
const number = document.querySelectorAll('.numDisplay')
const clear = document.querySelector('[data-clear]')
const equal = document.querySelector('[data-equal]')

display.innerText = ""
let prevNum;
let operator;
let previous;
let currNum;


// function for Computation //
function compute(){
if(operator == "+"){
  let output = Number(prevNum) + Number(currNum)
  display.innerText = `${output}`;
  prevNum = `${output}`;
}
else if(operator == "-"){
    let output = Number(prevNum) - Number(currNum)
    display.innerText = `${output}`;
    prevNum = `${output}`;
  }
 else if(operator == "*"){
    let output = Number(prevNum) * Number(currNum)
    display.innerText = `${output}`;
    prevNum = `${output}`;
  }
  else if(operator == "/"){
    let output = Number(prevNum) / Number(currNum)
    display.innerText = `${output}`;
    prevNum = `${output}`;
  }
}


// Event Listners //

number.forEach((e)=>{
    e.addEventListener('click', ()=>{
        e.style.backgroundColor = "yellow"
        setTimeout(()=> {e.style.backgroundColor = ""},100)
        
        let value = e.innerText;
        
        if(value >= 0 && value <= 9){
            display.textContent += value;
        }
        else if(value == "+" && display.textContent == "" || value == "-" && display.textContent == "" || value == "*" && display.textContent == "" || value == "/" && display.textContent == "" || value == "." && display.textContent == ""){
            value = "";
        }
        else{
            if(value == "+" && operator == undefined || value == "-" && operator == undefined || value == "*" && operator == undefined || value == "/" && operator == undefined){
                prevNum = display.innerText;
                operator = value;
                previous = prevNum + operator;
                display.textContent += value;
                console.log(prevNum,operator)
            }
            else if(value == "+" && operator != undefined || value == "-" && operator != undefined || value == "*" && operator != undefined || value == "/" && operator != undefined){
                console.log(prevNum,currNum,operator)
                currNum = display.innerText.replace(previous,"")
                compute();
                display.innerText = "";
                operator = value;
                currNum = undefined;
                previous = prevNum + operator;
                display.innerText += prevNum + operator;
            }
            else if(value == "."){
                display.textContent += value;
            }
            else{
                return
            }
        }
    })
})

clear.addEventListener('mousedown',()=>{
    clear.style.backgroundColor = 'lime'
    display.textContent = display.textContent.slice(0,-1)
    
})

clear.addEventListener('mouseup',()=>{
    clear.style.backgroundColor = 'rgb(240,240,240)'
})

allClear.addEventListener('mousedown',()=>{
    allClear.style.backgroundColor = 'red'
    display.innerHTML = "";
    prevNum = undefined;
    operator = undefined;
    previous = undefined;
    currNum = undefined;

})

allClear.addEventListener('mouseup',()=>{
    allClear.style.backgroundColor = 'rgb(240,240,240)'
})
equal.addEventListener('mousedown',()=>{
    equal.style.backgroundColor = 'green'
    currNum = display.innerText.replace(previous,"")
    compute();
    operator = undefined;
})

equal.addEventListener('mouseup',()=>{
    equal.style.backgroundColor = 'rgb(240,240,240)'
})