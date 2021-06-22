let ks = require('node-key-sender');
require('dotenv').config()
const delay = require('delay');
let bouge = process.env.NBBOUGE;
ks.setOption('globalDelayPressMillisec', 1000);


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

function alerteTerminal() {
    console.log("\007");
}
console.log("script start :)");

(async() => {

    await delay(1000 * 60 * 5);

    console.log("wake up !");
    if (process.env.CLICKACTIVATE == "TRUE") {
        eat();
    }
    if (process.env.SONG == "TRUE") {
        alerteTerminal();
    }
    random = getRandomInt();
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
            chelou(bouge);
            break;

        default:
            right(bouge);
            left(bouge);
            break;
    }
})();