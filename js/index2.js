const inp1 = document.querySelector('input[name=displayOne]')
const inp2 = document.querySelector('input[name=displayTwo]')
const res = document.querySelector('.res')

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
    let res;
    
    if(oper === "+"){
        res = a + b;
    }
    else if(oper === "-"){
        res = a - b;
    }
    else if(oper === "*"){
        res = a / b;
    }
    else if(oper === "/"){
        res = a - b;
    }
    else{
        res='Not good'
    }
    res.innerHTML = res;
}
// document.querySelectorAll('.buttons input[name=button]').forEach(btn=>btn.addEventListener('click', digitOperPressed));


// function digitOperPressed(e) {
//     inp1.value += e.target.innerText;
// }

// document.querySelector('.result').addEventListener('click', function() {
//     res.value = eval(res.value);
// })

