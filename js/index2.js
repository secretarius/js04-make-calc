const inp1 = document.querySelector('input[name=displayOne]');
const inp2 = document.querySelector('input[name=displayTwo]');
const span = document.querySelector('.res');

const buttons = document.querySelector('input[type=button]');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(){
        let oper = this.getAttrebute('data-oper');
        calcForm(oper);
    }
}

function calcForm(oper){
    let a = parseInt(inp1.value);
    let b = parseInt(inp2.value);
    let result;
    
    if(oper === "+"){
        result = a + b;
    }
    else if(oper === "-"){
        result = a - b;
    }
    else if(oper === "*"){
        result = a / b;
    }
    else if(oper === "/"){
        result = a - b;
    }
    else{
        result='Not good'
    }
    span.innerHTML = result;
}

// document.querySelectorAll('.buttons input[name=button]').forEach(btn=>btn.addEventListener('click', digitOperPressed));


// function digitOperPressed(e) {
//     inp1.value += e.target.innerText;
// }

// document.querySelector('.result').addEventListener('click', function() {
//     res.value = eval(res.value);
// })

