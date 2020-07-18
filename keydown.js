document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyZ') {
        let audio = new Audio('./sounds/1do.mp3');
        audio.play();
        let q = document.getElementById('ndo');
        if (q.textContent == '') {
            q.innerHTML = 'ДО';
            q.style.backgroundColor = 'red';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';

        }
    }

});

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyS') {
        let audio = new Audio('./sounds/2dob.mp3');
        audio.play();
        let q = document.getElementById('nd0b');
        if (q.textContent == '') {
            q.innerHTML = 'ДО_#';
            q.style.backgroundColor = 'lightcoral';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }

    if (event.code == 'KeyX') {
        let audio = new Audio('./sounds/3re.mp3');
        audio.play();
        let q = document.getElementById('nre');
        if (q.textContent == '') {
            q.innerHTML = 'РЕ';
            q.style.backgroundColor = 'orange';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyD') {
        let audio = new Audio('./sounds/4reb.mp3');
        audio.play();
        let q = document.getElementById('nreb');
        if (q.textContent == '') {
            q.innerHTML = 'РЕ_#';
            q.style.backgroundColor = 'yellow';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyC') {
        let audio = new Audio('./sounds/5mi.mp3');
        audio.play();
        let q = document.getElementById('nmi');
        if (q.textContent == '') {
            q.innerHTML = 'МИ';
            q.style.backgroundColor = ' lightgoldenrodyellow';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'Tab') {
        let audio = new Audio('./sounds/6fa.mp3');
        audio.play();
        let q = document.getElementById('nfa');
        if (q.textContent == '') {
            q.innerHTML = 'ФА';
            q.style.backgroundColor = 'green';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit1') {
        let audio = new Audio('./sounds/7fab.mp3');
        audio.play();
        let q = document.getElementById('nfab');
        if (q.textContent == '') {
            q.innerHTML = 'ФА_#';
            q.style.backgroundColor = 'lightgreen';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyQ') {
        let audio = new Audio('./sounds/8g.mp3');
        audio.play();
        let q = document.getElementById('ng');
        if (q.textContent == '') {
            q.innerHTML = 'СОЛЬ';
            q.style.backgroundColor = 'blue';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit2') {
        let audio = new Audio('./sounds/9gb.mp3');
        audio.play();
        let q = document.getElementById('ngb');
        if (q.textContent == '') {
            q.innerHTML = 'СОЛЬ_#';
            q.style.backgroundColor = 'lightskyblue';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyW') {
        let audio = new Audio('./sounds/10a.mp3');
        audio.play();
        let q = document.getElementById('na');
        if (q.textContent == '') {
            q.innerHTML = 'ЛЯ';
            q.style.backgroundColor = 'darkblue';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit3') {
        let audio = new Audio('./sounds/11ab22.mp3');
        audio.play();
        let q = document.getElementById('nab');
        if (q.textContent == '') {
            q.innerHTML = 'ЛЯ_#';
            q.style.backgroundColor = 'darkmagenta';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyE') {
        let audio = new Audio('./sounds/si.mp3');
        audio.play();
        let q = document.getElementById('nsi');
        if (q.textContent == '') {
            q.innerHTML = 'СИ';
            q.style.backgroundColor = 'purple';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyR') {
        let audio = new Audio('./sounds/do2.mp3');
        audio.play();
        let q = document.getElementById('ndo2');
        if (q.textContent == '') {
            q.innerHTML = 'ДО';
            q.style.backgroundColor = 'red';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit5') {
        let audio = new Audio('./sounds/13dob2.mp3');
        audio.play();
        let q = document.getElementById('ndob2');
        if (q.textContent == '') {
            q.innerHTML = 'ДО_#';
            q.style.backgroundColor = 'lightcoral';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyT') {
        let audio = new Audio('./sounds/14re2.mp3');
        audio.play();
        let q = document.getElementById('nre2');
        if (q.textContent == '') {
            q.innerHTML = 'РЕ';
            q.style.backgroundColor = 'orange';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit6') {
        let audio = new Audio('./sounds/15re2b.mp3');
        audio.play();
        let q = document.getElementById('nreb2');
        if (q.textContent == '') {
            q.innerHTML = 'РЕ_#';
            q.style.backgroundColor = 'yellow';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});


document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyY') {
        let audio = new Audio('./sounds/16mi2.mp3');
        audio.play();
        let q = document.getElementById('nmi2');
        if (q.textContent == '') {
            q.innerHTML = 'МИ';
            q.style.backgroundColor = ' lightgoldenrodyellow';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyU') {
        let audio = new Audio('./sounds/17fa2.mp3');
        audio.play();
        let q = document.getElementById('nfa2');
        if (q.textContent == '') {
            q.innerHTML = 'ФА';
            q.style.backgroundColor = 'green';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit8') {
        let audio = new Audio('./sounds/18fa2b.mp3');
        audio.play();
        let q = document.getElementById('nfab2');
        if (q.textContent == '') {
            q.innerHTML = 'ФА_#';
            q.style.backgroundColor = 'lightgreen';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyI') {
        let audio = new Audio('./sounds/19g2.mp3');
        audio.play();
        let q = document.getElementById('ng2');
        if (q.textContent == '') {
            q.innerHTML = 'СОЛЬ';
            q.style.backgroundColor = 'blue';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit9') {
        let audio = new Audio('./sounds/20g2b.mp3');
        audio.play();
        let q = document.getElementById('ngb2');
        if (q.textContent == '') {
            q.innerHTML = 'СОЛЬ_#';
            q.style.backgroundColor = 'lightskyblue';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }

});


document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyO') {
        let audio = new Audio('./sounds/21a2.mp3');
        audio.play();
        let q = document.getElementById('na2');
        if (q.textContent == '') {
            q.innerHTML = 'ЛЯ';
            q.style.backgroundColor = 'darkblue';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }

});

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit0') {
        let audio = new Audio('./sounds/22a2b.mp3');
        audio.play();
        let q = document.getElementById('nab2');
        if (q.textContent == '') {
            q.innerHTML = 'ЛЯ_#';
            q.style.backgroundColor = 'darkmagenta';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyP') {
        let audio = new Audio('./sounds/23si2.mp3');
        audio.play();
        let q = document.getElementById('nsi2');
        if (q.textContent == '') {
            q.innerHTML = 'СИ';
            q.style.backgroundColor = 'purple';

        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});
