function semafori() {
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
var start = setInterval (semafori,10000)

}
semafori ();