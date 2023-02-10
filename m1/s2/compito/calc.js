let screen = document.querySelector('#screen');
let bottone = document.querySelectorAll('.bottone');
let decimale = document.querySelectorAll('.decimale');
let operatore = document.querySelectorAll('.operatore');

for (b of bottone) {
    b.addEventListener('click', (e) => {
        bottonetext = e.target.innerText;
        screen.value += bottonetext
    });
}

for(o of operatore){
    o.addEventListener('click', (e) => {
        operatoretext = e.target.innerText;

        if (operatoretext == '×') {
            operatoretext = '*';
        }

        if(screen.value.includes('*')){
            operatoretext = '';
        }
        if(screen.value.includes('/')){
            operatoretext = ''
        }
        if(screen.value.includes('+')){
            operatoretext = ''
        }
        if(screen.value.includes('-')){
            operatoretext = ''
        }

        if (operatoretext == '÷') {
            operatoretext = '/';
        }
        if (screen.value == ''){
            operatoretext = '';
        }
        if (screen.value == `${bottonetext}.`){
            operatoretext = '';
        }
        screen.value += operatoretext
    })
}

for (d of decimale) {
    d.addEventListener('click', (e) => {
        decimaletext = e.target.innerText;

        if (screen.value.includes('.')) {
            decimaletext = ''
        }
        if (screen.value == '')
        decimaletext = '0.'

        screen.value += decimaletext
    });
}

function uguale(){
    screen.value = eval(screen.value)
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}