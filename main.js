function semafor1() {
    var boje = document.getElementsByClassName ('boje')
boje [0]. style.background = 'red';
boje [1]. style.background = 'white';
boje [2]. style.background = 'white';

function changeToYellow() {
    boje [1]. style.background = 'yellow';
}

function changeToGreen () {
    boje [0]. style.background = 'white';
    boje [1]. style.background = 'white';
    boje [2]. style.background = 'green';
}

function changeToYellow () {
    boje [1]. style.background = 'yellow';
}

function changeToRed () {
    boje [0]. style.background = 'red';
    boje [1]. style.background = 'white';
    boje [2]. style.background = 'white';
}

var x = setTimeout(changeToYellow , 2000);
var y = setTimeout(changeToGreen , 4000);
var y = setTimeout(changeToGreen , 6000);
var x = setTimeout(changeToYellow , 6000);
var z = setTimeout(changeToRed , 8000);
var start = setInterval (semafor1,8000)

}
semafor1 ();

function semafor2() {
    var boje1 = document.getElementsByClassName ('boje1')
boje1 [0]. style.background = 'white';
boje1 [1]. style.background = 'white';
boje1 [2]. style.background = 'green';

function changeToYellow() {
    boje1 [1]. style.background = 'yellow';
}

function changeToRed () {
    boje1 [0]. style.background = 'red';
    boje1 [1]. style.background = 'white';
    boje1 [2]. style.background = 'white';
}

function changeToYellow () {
    boje1 [1]. style.background = 'yellow';
}

function changeToGreen () {
    boje1 [0]. style.background = 'white';
    boje1 [1]. style.background = 'white';
    boje1 [2]. style.background = 'green';
}

var x = setTimeout(changeToYellow , 2000);
var y = setTimeout(changeToRed , 4000);
var y = setTimeout(changeToRed , 6000);
var x = setTimeout(changeToYellow , 6000);
var z = setTimeout(changeToGreen , 8000);
var start = setInterval (semafor2,8000)

}
semafor2 ();