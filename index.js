let pokedexSpace = document.getElementById('pokedexSpace');
let button = document.getElementById('add_button');
let poke = document.getElementsByClassName('pokemon');
let themeImg = document.getElementById('theme-img');
let bg = document.getElementById('bg')

async function pokedex() {
    let conexao = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${a}&limit=${b}`)
    let conexaoConvertida = await conexao.json();

    // console.log(conexaoConvertida);

    conexaoConvertida.results.forEach(pokemon => {
        async function pokedex1(a) {
            let conexao1 = await fetch(`${a.url}`);
            let conexaoConvertida1 = await conexao1.json();


            pokedexSpace.innerHTML += `
                <div class="pokemon" style="background-color: blue">
                <img src='${conexaoConvertida1.sprites.front_default}' class="poke_img"/>
                <br><p>${pokemon.name}</p>
                </div>
                 `
        }
        pokedex1(pokemon)

        async function conexao2() {
            let conexao2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}
            `)
            let conexao22 = await conexao2.json();

            console.log(conexao22.types);
        }

        conexao2();
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