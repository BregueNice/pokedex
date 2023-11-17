let pokedexSpace = document.getElementById('pokedexSpace');
let button = document.getElementById('add_button');
let poke = document.getElementsByClassName('pokemon');
let themeImg = document.getElementById('theme-img');
let bg = document.getElementById('bg');
let pokeData = document.getElementById('pokemon-data');
let buttonDiv = document.getElementById('button-div');
let pokeImg = document.getElementById('pokeStatus__img');
let pokeName = document.getElementById('pokeStatus__name');

async function pokedex() {
    let conexao = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${a}&limit=${b}`)
    let conexaoConvertida = await conexao.json();

    // console.log(conexaoConvertida);

    conexaoConvertida.results.forEach(pokemon => {
        async function pokedex1(a) {
            let conexao1 = await fetch(`${a.url}`);
            let conexaoConvertida1 = await conexao1.json();


            pokedexSpace.innerHTML += `
                <div class="pokemon" style="background-color: blue" onclick="pokemonStatus(this)" id="${pokemon.name}">
                <img src='${conexaoConvertida1.sprites.front_default}' class="poke_img"/>
                <br><p>${pokemon.name}</p>
                </div>
                 `
        }
        pokedex1(pokemon)
    });
}

let a = 0;
let b = 12;

pokedex();

function mudar() {
    a = a + b;
    b = b + 12;
    pokedex();
}

function tema() {
    if (themeImg.outerHTML === '<img src="./assets/imagens/moon.png" alt="" id="theme-img">') {
        themeImg.setAttribute('src', './assets/imagens/sun.png')
        bg.setAttribute('src', "./assets/imagens/por-do-sol-e-silhuetas-de-arvores-nas-montanhas-generative-ai.jpg")
    } else {
        themeImg.setAttribute('src', './assets/imagens/moon.png')
        bg.setAttribute('src', "./assets/imagens/uma-paisagem-montanhosa-com-um-coracao-amarelo-no-topo.jpg")
    }

}

function pokemonStatus(obj) {
    pokedexSpace.style.display = "none";
    buttonDiv.style.display = "none";
    pokeData.style.display = "block";
    async function conexao2() {
        let conexao2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${obj.id}
        `)
        let conexao22 = await conexao2.json();
    
        console.log(conexao22);

        pokeImg.setAttribute('src', `${conexao22.sprites.front_default}`)
        pokeName.innerText = `${conexao22.name}`
    }
    conexao2();
}

function back(){
    pokedexSpace.style.display = "flex";
    buttonDiv.style.display = "block";
    pokeData.style.display = "none";
    pokeImg.setAttribute('src', "")
}