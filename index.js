let ks = require('node-key-sender');
ks.setOption('globalDelayPressMillisec', 1000);
require('dotenv').config()
let moment = require('moment');

let bouge = process.env.NBBOUGE;


function eat() {
    for (let i = 0; i < 5; i++) {
        ks.sendKey(process.env.CLICK);
    }
}

function forward(moove) {
    for (let i = 0; i < moove; i++) {
        ks.sendKey(process.env.AVANCE);
    }
}

function left(moove) {
    for (let i = 0; i < moove; i++) {
        ks.sendKey(process.env.GAUCHE);
    }
}

function right(moove) {
    for (let i = 0; i < moove; i++) {
        ks.sendKey(process.env.DROITE);
    }
}

function backward(moove) {
    for (let i = 0; i < moove; i++) {
        ks.sendKey(process.env.RECULE);
    }
}

function chelou(moove) {
    for (let i = 0; i < moove; i++) {
        ks.sendCombination(['Space', process.env.AVANCE]);
        ks.sendCombination(['Space', process.env.DROITE]);

    }
    for (let i = 0; i < moove; i++) {
        ks.sendCombination(['Space', process.env.RECULE]);
        ks.sendCombination(['Space', process.env.GAUCHE]);
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}


console.log("script start :)");



setInterval(function() {;
    console.log("wake up !\t" + moment().format('MMMM Do YYYY, h:mm:ss a'));
    if (process.env.EATACTIVATE == "TRUE") {
        console.log("eat")
        eat();
    }

    random = getRandomInt();
    console.log(random)
    switch (random) {
        case 1:
            forward(bouge);
            backward(bouge);
            break;
        case 2:
            left(bouge);
            right(bouge);
            break;

        case 3:
            if (process.env.CHUMACTIVATE == "TRUE") {
                chelou(bouge);

            } else {
                right(bouge);
                left(bouge);
            }
            break;

        default:
            right(bouge);
            left(bouge);
            break;
    }

}, 1000 * 60 * process.env.RESTART);