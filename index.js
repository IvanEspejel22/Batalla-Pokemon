var electrico = {
    nombre: 'electrico',
    eficaz: ['agua', 'volador'],
    pocoEficaz: ['planta', 'electrico', 'dragon'],
    noAfecta: ['tierra']
};

var normal = {
    nombre: 'normal',
    eficaz: [null],
    pocoEficaz: ['roca', 'acero'],
    noAfecta: ['fantasma']
};

var fuego = {
    nombre: 'fuego',
    eficaz: ['planta', 'hielo', 'bicho', 'acero'],
    pocoEficaz: ['fuego', 'agua', 'roca', 'dragon'],
    noAfecta: [null]
};

var agua = {
    nombre: 'agua',
    eficaz: ['fuego', 'tierra', 'roca'],
    pocoEficaz: ['planta', 'agua', 'dragon'],
    noAfecta: [null]
};

var planta = {
    nombre: 'planta',
    eficaz: ['agua', 'tierra', 'roca'],
    pocoEficaz: ['planta', 'fuego', 'veneno', 'volador', 'bicho', 'dragon', 'acero'],
    noAfecta: [null]
};

var hielo = {
    nombre: 'hielo',
    eficaz: ['planta', 'tierra', 'volador', 'dragon'],
    pocoEficaz: ['agua', 'fuego', 'hielo', 'acero'],
    noAfecta: [null]
};

var lucha = {
    nombre: 'lucha',
    eficaz: ['normal', 'hielo', 'roca', 'siniestro', 'acero'],
    pocoEficaz: ['veneno', 'volador', 'psiquico', 'bicho', 'hada'],
    noAfecta: ['fantasma']
};

var veneno = {
    nombre: 'veneno',
    eficaz: ['planta', 'hada'],
    pocoEficaz: ['veneno', 'tierra', 'roca', 'fantasma'],
    noAfecta: ['acero']
};

var tierra = {
    nombre: 'tierra',
    eficaz: ['fuego', 'electrico', 'veneno', 'roca', 'acero'],
    pocoEficaz: ['planta', 'bicho'],
    noAfecta: ['volador']
};

var volador = {
    nombre: 'volador',
    eficaz: ['planta', 'lucha', 'bicho'],
    pocoEficaz: ['electrico', 'roca', 'acero'],
    noAfecta: [null]
};

var psiquico = {
    nombre: 'psiquico',
    eficaz: ['veneno', 'lucha'],
    pocoEficaz: ['psiquico', 'acero'],
    noAfecta: ['siniestro']
};

var bicho = {
    nombre: 'bicho',
    eficaz: ['planta', 'psiquico', 'siniestro'],
    pocoEficaz: ['fuego', 'lucha', 'veneno', 'volador', 'fantasma', 'acero', 'hada'],
    noAfecta: [null]
};

var roca = {
    nombre: 'roca',
    eficaz: ['fuego', 'hielo', 'volador', 'bicho'],
    pocoEficaz: ['tierra', 'lucha', 'acero'],
    noAfecta: [null]
};

var fantasma = {
    nombre: 'fantasma',
    eficaz: ['psiquico', 'fantasma'],
    pocoEficaz: ['siniestro'],
    noAfecta: ['normal']
};

var dragon = {
    nombre: 'dragon',
    eficaz: ['dragon'],
    pocoEficaz: ['acero'],
    noAfecta: ['hada']
};

var siniestro = {
    nombre: 'siniestro',
    eficaz: ['psiquico', 'fantasma'],
    pocoEficaz: ['lucha', 'siniestro', 'hada'],
    noAfecta: [null]
};

var acero = {
    nombre: 'acero',
    eficaz: ['hielo', 'roca', 'hada'],
    pocoEficaz: ['fuego', 'agua', 'electrico', 'acero'],
    noAfecta: [null]
};

var hada = {
    nombre: 'acero',
    eficaz: ['lucha', 'dragon', 'siniestro'],
    pocoEficaz: ['fuego', 'veneno', 'acero'],
    noAfecta: [null]
};

var tipos = [electrico, normal, fuego, agua, planta, hielo, lucha, veneno, tierra, volador, psiquico, bicho, roca, fantasma, dragon, siniestro, acero, hada];

var pikachu = {
    nombre: 'pikachu',
    spriteFront: 'https://img.pokemondb.net/sprites/black-white/anim/shiny/pikachu.gif',
    spriteBack: 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/pikachu.gif',
    hp: {
        hpInicial: 211,
        hpTotal: 211
    },
    velocidad: 306,
    tipo: electrico,
    ataques: {
        a1: {
            nombre: 'rayo',
            tipo: electrico,
            potencia: 94,
            pp: {
                ppInicial: 15,
                ppTotal: 15
            }
        },
        a2: {
            nombre: 'ataque rapido',
            tipo: normal,
            potencia: 40,
            pp: {
                ppInicial: 30,
                ppTotal: 30
            }
        },
        a3: {
            nombre: 'trueno',
            tipo: electrico,
            potencia: 110,
            pp: {
                ppInicial: 10,
                ppTotal: 10
            }
        },
        a4: {
            nombre: 'cola ferrea',
            tipo: acero,
            potencia: 100,
            pp: {
                ppInicial: 15,
                ppTotal: 15
            }
        },
    }

};

var charizard = {
    nombre: 'charizard',
    spriteFront: 'https://img.pokemondb.net/sprites/black-white/anim/shiny/charizard.gif',
    spriteBack: 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/charizard.gif',
    hp: {
        hpInicial: 298,
        hpTotal: 298
    },
    velocidad: 299,
    tipo: fuego,
    ataques: {
        a1: {
            nombre: 'lanzallamas',
            tipo: fuego,
            potencia: 90,
            pp: {
                ppInicial: 15,
                ppTotal: 15
            }
        },
        a2: {
            nombre: 'onda certera',
            tipo: lucha,
            potencia: 120,
            pp: {
                ppInicial: 5,
                ppTotal: 5
            }
        },
        a3: {
            nombre: 'pulso dragon',
            tipo: dragon,
            potencia: 85,
            pp: {
                ppInicial: 10,
                ppTotal: 10
            }
        },
        a4: {
            nombre: 'tajo aereo',
            tipo: volador,
            potencia: 75,
            pp: {
                ppInicial: 15,
                ppTotal: 15
            }
        },
    }

};

var venusaur = {
    nombre: 'venusaur',
    spriteFront: 'https://img.pokemondb.net/sprites/black-white/anim/shiny/venusaur.gif',
    spriteBack: 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/venusaur.gif',
    hp: {
        hpInicial: 360,
        hpTotal: 360
    },
    velocidad: 201,
    tipo: planta,
    ataques: {
        a1: {
            nombre: 'lluevehojas',
            tipo: planta,
            potencia: 130,
            pp: {
                ppInicial: 5,
                ppTotal: 5
            }
        },
        a2: {
            nombre: 'bomba lodo',
            tipo: veneno,
            potencia: 90,
            pp: {
                ppInicial: 10,
                ppTotal: 10
            }
        },
        a3: {
            nombre: 'poder oculto',
            tipo: normal,
            potencia: 60,
            pp: {
                ppInicial: 15,
                ppTotal: 15
            }
        },
        a4: {
            nombre: 'energibola',
            tipo: planta,
            potencia: 90,
            pp: {
                ppInicial: 10,
                ppTotal: 10
            }
        },
    }

};

var blastoise = {
    nombre: 'blastoise',
    spriteFront: 'https://img.pokemondb.net/sprites/black-white/anim/shiny/blastoise.gif',
    spriteBack: 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/blastoise.gif',
    hp: {
        hpInicial: 363,
        hpTotal: 363
    },
    velocidad: 192,
    tipo: agua,
    ataques: {
        a1: {
            nombre: 'hidrobomba',
            tipo: agua,
            potencia: 110,
            pp: {
                ppInicial: 5,
                ppTotal: 5
            }
        },
        a2: {
            nombre: 'rayo hielo',
            tipo: hielo,
            potencia: 90,
            pp: {
                ppInicial: 10,
                ppTotal: 10
            }
        },
        a3: {
            nombre: 'cola dragon',
            tipo: dragon,
            potencia: 60,
            pp: {
                ppInicial: 10,
                ppTotal: 10
            }
        },
        a4: {
            nombre: 'onda certera',
            tipo: lucha,
            potencia: 120,
            pp: {
                ppInicial: 5,
                ppTotal: 5
            }
        },
    }

};

var jugador1, jugador2;

let contenedor = document.getElementById('seleccion');

var pokemonDisponibles = [pikachu, charizard, blastoise, venusaur];

pokemonDisponibles.map(function (pokes) {
    // console.log(typeof(pokes));

    contenedor.innerHTML += `
    <div class="ball centra" id='pokeba${pokes.nombre}'>
      <div class="mitad-roja centra"> <h2>${pokes.nombre}</h2></div>
        <button id='${pokes.nombre}' onClick="batalla('${pokes.nombre}')"
         class="centro-ball" style="background-image:url(${pokes.spriteFront})">
      </button>
    </div>`;


    setTimeout(() => {

        var el = document.getElementById('pokeba' + pokes.nombre);
        console.log(el);
        el.addEventListener("click", function () {
            setTimeout(() => {
                var rival = Math.floor(Math.random() * 4);
                var pokemonRival = pokemonDisponibles[rival];
                console.log(pokemonRival);
                console.log(pokes);
                batalla(pokes, pokemonRival);

            }, 0);
        });


    }, 300);
});

var titulo = document.getElementById('titulo');
var turnoJugador1 = 0;
var turnoJugador2 = 0;
var ataqueJ1, ataqueJ2, danoAtqJ1, danoAtqJ2;

async function batalla(pokemon1, pokemon2) {

    jugador1 = await pokemon1;
    jugador2 = await pokemon2;
    titulo.innerText = `P1 ${jugador1.nombre} vs P2 ${jugador2.nombre}`;
    console.log(jugador1.ataques.a1.tipo);
    contenedor.innerHTML = `
    <div id="player2">
            <div class="datos">
                <h6>HP</h6>
                    <div class="hpContiene">
                       <div class="vida" id="hp2">${jugador2.hp.hpTotal}</div>
                    </div>
            </div>
            <div class="personaje">
                <img src="${jugador2.spriteFront}" alt=""></div>
            </div>
    <div id="player1">
        <div class="personaje">
            <img src="${jugador1.spriteBack}" alt="">
        </div>
        <div class="datos">
            <h6>HP</h6>  
                <div class="hpContiene">
                    <div class="vida" id="hp1">${jugador1.hp.hpTotal}</div>
                </div>
        </div>
        <div class="ataques">
           <button class="ataque" id="a1"> ${jugador1.ataques.a1.nombre} <br> pp ${jugador1.ataques.a1.pp.ppTotal} </button>
           <button class="ataque" id="a2"> ${jugador1.ataques.a2.nombre} <br> pp ${jugador1.ataques.a2.pp.ppTotal} </button>
           <button class="ataque" id="a3"> ${jugador1.ataques.a3.nombre} <br> pp ${jugador1.ataques.a3.pp.ppTotal} </button>
           <button class="ataque" id="a4"> ${jugador1.ataques.a4.nombre} <br> pp ${jugador1.ataques.a4.pp.ppTotal} </button>
        </div>
    </div>  `
    darTurno(jugador1, jugador2);
    var elA1 = document.getElementById('a1');
    var elA2 = document.getElementById('a2');
    var elA3 = document.getElementById('a3');
    var elA4 = document.getElementById('a4');
    elA1.addEventListener("click", function () {
            turno(turnoJugador1,turnoJugador2,jugador1.ataques.a1);
            jugador1.ataques.a1.pp.ppTotal = jugador2.ataques.a1.pp.ppTotal - 1;
        });
    elA2.addEventListener("click", function () {
            turno(turnoJugador1,turnoJugador2,jugador1.ataques.a2);
            jugador1.ataques.a2.pp.ppTotal = jugador2.ataques.a2.pp.ppTotal - 1;
        });
    elA3.addEventListener("click", function () {
            turno(turnoJugador1,turnoJugador2,jugador1.ataques.a3);
            jugador1.ataques.a3.pp.ppTotal = jugador2.ataques.a3.pp.ppTotal - 1;
        });
    elA4.addEventListener("click", function () {
            turno(turnoJugador1,turnoJugador2,jugador1.ataques.a4);
            jugador1.ataques.a4.pp.ppTotal = jugador2.ataques.a4.pp.ppTotal - 1;
        });

}

function darTurno(jugador1, jugador2) {
    if (jugador1.velocidad > jugador2.velocidad) {
        turnoJugador1 = 1;
        turnoJugador2 = 2;
    } else {
        turnoJugador2 = 1;
        turnoJugador1 = 2;
    }
}

function turno(turnoJ1, turnoJ2, ataqueJ1) {
    if (turnoJ1 < turnoJ2) {
        ataqueJugador1(ataqueJ1);
        if (jugador2.hp.hpTotal > 0) {
            ataqueJugador2();
        } else {
            contenedor.innerHTML = `<h6>Ganaste</h6>`
        }
    } else {
        ataqueJugador2();
        if (jugador1.hp.hpTotal > 0) {
            ataqueJugador1(ataqueJ1);
        } else {
            contenedor.innerHTML = `<h6>Perdiste</h6>`
            
            
        }
    }
}

function ataqueJugador1(atq) {
    ataqueJ1 = atq;
    efectividad(ataqueJ1, jugador2);
    danoAtqJ1 = ataqueJ1.potencia * efecto;
    jugador2.hp.hpTotal = jugador2.hp.hpTotal - danoAtqJ1;
    alert(`Player1 ${jugador1.nombre} ha usado ${ataqueJ1.nombre}`) ;
    hpBar2();
    console.log(efecto);
}

function ataqueJugador2() {
    var atqRival = Math.floor(Math.random() * 4) + 1;
    switch (atqRival) {
        case 1:
            ataqueJ2 = jugador2.ataques.a1;
            efectividad(ataqueJ2, jugador1);
            jugador2.ataques.a1.pp.ppTotal = jugador2.ataques.a1.pp.ppTotal - 1;
            danoAtqJ2 = ataqueJ2.potencia * efecto;
            jugador1.hp.hpTotal = jugador1.hp.hpTotal - danoAtqJ2;
            alert(`Player2 ${jugador2.nombre} ha usado ${ataqueJ2.nombre}`)  ;
            hpBar1();
            break;
        case 2:
            ataqueJ2 = jugador2.ataques.a2;
            efectividad(ataqueJ2, jugador1);
            jugador2.ataques.a2.pp.ppTotal = jugador2.ataques.a2.pp.ppTotal - 1;
            danoAtqJ2 = ataqueJ2.potencia * efecto;
            jugador1.hp.hpTotal = jugador1.hp.hpTotal - danoAtqJ2;
            alert(`Player2 ${jugador2.nombre} ha usado ${ataqueJ2.nombre}`);
            hpBar1();
            break;
        case 3:
            ataqueJ2 = jugador2.ataques.a3;
            efectividad(ataqueJ2, jugador1);
            jugador2.ataques.a3.pp.ppTotal = jugador2.ataques.a3.pp.ppTotal - 1;
            danoAtqJ2 = ataqueJ2.potencia * efecto;
            jugador1.hp.hpTotal = jugador1.hp.hpTotal - danoAtqJ2;
            alert(`Player2 ${jugador2.nombre} ha usado ${ataqueJ2.nombre}`);
            hpBar1();
            break;
        default:
            ataqueJ2 = jugador2.ataques.a4;
            efectividad(ataqueJ2, jugador1);
            jugador2.ataques.a4.pp.ppTotal = jugador2.ataques.a4.pp.ppTotal - 1;
            danoAtqJ2 = ataqueJ2.potencia * efecto;
            jugador1.hp.hpTotal = jugador1.hp.hpTotal - danoAtqJ2;
            alert(`Player2 ${jugador2.nombre} ha usado ${ataqueJ2.nombre}`);
            hpBar1();
            break;
    }
}

var efecto = 1;

function efectividad(atq, objetivo) {
    efecto = 1;
    var atqEficaz = atq.tipo.eficaz.length;
    var atqNulo = atq.tipo.noAfecta.length;
    var atqBajo = atq.tipo.pocoEficaz.length;
    for (var i = 0; i < atqEficaz; i++) {

        if (objetivo.tipo.nombre == atq.tipo.eficaz[i]) {
            efecto = 2;
        } 
    }
    for (var i = 0; i < atqNulo; i++) {

        if (objetivo.tipo.nombre == atq.tipo.noAfecta[i]) {
            efecto = 0;
        } 
    }

    for (var i = 0; i < atqBajo; i++) {

        if (objetivo.tipo.nombre == atq.tipo.pocoEficaz[i]) {
            efecto = .5;
        } 
    }
}


function hpBar1(){
    var Bar1 = document.getElementById('hp1');
    var dano1 = parseInt((jugador1.hp.hpTotal/jugador1.hp.hpInicial) * 100);
    Bar1.style.width = `${dano1}%`;
    Bar1.innerText = `${jugador1.hp.hpTotal}`;
}

function hpBar2(){
    var Bar2 = document.getElementById('hp2');
    var dano2 = parseInt((jugador2.hp.hpTotal/jugador2.hp.hpInicial) * 100);
    Bar2.style.width = `${dano2}%`;
    console.log(dano2)
    Bar2.innerText = `${jugador2.hp.hpTotal}`;
}