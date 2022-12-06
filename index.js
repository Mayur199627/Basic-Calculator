const display = document.querySelector('#display')
const btn = document.querySelector('#buttonContainer');
const allClear = document.querySelector('[data-allClear]')
const number = document.querySelectorAll('.numDisplay')
const clear = document.querySelector('[data-clear]')
const equal = document.querySelector('[data-equal]')

display.textContent = ""
let prevNum;
let operator;
let previous;
let currNum;


// function for Computation //
function compute(){
if(operator == "+"){
  let output = Number(prevNum) + Number(currNum)
  display.textContent = `${output}`;
}
else if(operator == "-"){
    let output = Number(prevNum) - Number(currNum)
    display.textContent = `${output}`;
  }
 else if(operator == "*"){
    let output = Number(prevNum) * Number(currNum)
    display.textContent = `${output}`;
  }
  if(operator == "/"){
    let output = Number(prevNum) / Number(currNum)
    display.textContent = `${output}`;
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
            display.textContent = "";
        }
        else{
            if(value == "+" && operator == undefined || value == "-" && operator == undefined || value == "*" && operator == undefined || value == "/" && operator == undefined){
                prevNum = display.innerText
                operator = value;
                previous = prevNum + operator;
                display.textContent += value;
            }
            else if(value = "."){
                display.textContent += value;
            }
            else{
                value = ""
            }

        }
    })
})

clear.addEventListener('mousedown',()=>{
    clear.style.backgroundColor = 'lime'
    display.textContent = display.textContent.slice(0,-1)
    
})

clear.addEventListener('mouseup',()=>{
    clear.style.backgroundColor = 'white'
})

allClear.addEventListener('mousedown',()=>{
    allClear.style.backgroundColor = 'red'
    display.innerHTML = "";
    prevNum = "";
    operator = undefined;
    previous = "";
    currNum = "";

})

allClear.addEventListener('mouseup',()=>{
    allClear.style.backgroundColor = 'white'
})
equal.addEventListener('mousedown',()=>{
    equal.style.backgroundColor = 'green'
    currNum = display.innerText.replace(previous,"")
    compute();
    operator = undefined;
})

equal.addEventListener('mouseup',()=>{
    equal.style.backgroundColor = 'white'
})