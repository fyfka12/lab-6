let button1=document.querySelector("#btn1");
let txt=document.querySelector('#txt1');

button1.addEventListener("click", ()=>{
    let a=document.querySelector('#inp1').value;
    let b=document.querySelector('#inp2').value;
    c=Number(a)+Number(b);

    txt.innerHTML="Результат: "+(c);
}
)


let button2=document.querySelector('#btn2');
button2.addEventListener('click', addCircle);
function addCircle(){
    let newCircle=document.createElement('div');
    tsk2.appendChild(newCircle);
    newCircle.classList.add('circle');
    
}

let button3 = document.querySelector('#btn3');
let txt2 = document.querySelector('#txt2');

button3.addEventListener('click', () => {
    let a = parseFloat(document.querySelector('#inp3').value);
    let b = parseFloat(document.querySelector('#inp4').value);
    let c = parseFloat(document.querySelector('#inp5').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        txt2.innerHTML = 'Будь ласка, введіть числові значення!';
    } else {
        let sum = a + b + c;
        txt2.innerHTML = `Сума: ${sum}`;
    }
});

let button4 = document.querySelector('#btn4');
let tsk4 = document.querySelector('#tsk4');

button4.addEventListener('click', addRhombus);

function addRhombus() {
    let newRhombus = document.createElement('div');
    tsk4.appendChild(newRhombus);
    newRhombus.classList.add('rhombus');
}