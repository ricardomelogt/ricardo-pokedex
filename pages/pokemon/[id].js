import React from 'react';
import styles from '../../main-css/poke-page.module.css';

// especificar numero maximo de pokemons da pokedex por ordem crescente:
var maxPokes = 620;
var pokeUnicoPaths = [] //{params:{id:'1',}},{params:{id:'2',}},

export default function Pokemon( { pokemon } ) {
    console.log(pokemon);

    //mostrar os tipos dos pokes:
    var qtdTypes = pokemon.types.length;
    var tipo01 = pokemon.types[0].type.name,
    tipo02;

    function mostrarTipo1() {
        return (
        <span className={'type_' + tipo01 + ' poke_type'}>{tipo01}</span>
        )
    }
    function mostrarTipo2() {
        if (qtdTypes == 2) {
            tipo02 = pokemon.types[1].type.name;
            return (
            <span> / <span className={'type_' + tipo02 + ' poke_type'}> {tipo02}</span></span>
            )
        }
    }

    // poke stats:
    var hp_stat = pokemon.stats[0].base_stat,
    atk_stat = pokemon.stats[1].base_stat,
    def_stat = pokemon.stats[2].base_stat,
    spatk_stat = pokemon.stats[3].base_stat,
    spdef_stat = pokemon.stats[4].base_stat,
    speed_stat = pokemon.stats[5].base_stat;

    // back/forward nav
    var pokeIndex = pokemon.id,
    pokeNavBack = pokeIndex - 1,
    pokeNavForward = pokeIndex + 1;

    function checkNavLinks() {
        if(pokeIndex == 1){
            pokeNavBack = 1;
        }
        if(pokeIndex == maxPokes){
            pokeNavForward = maxPokes;
        }
    };
    
    checkNavLinks();

    return(
        <div>
            <div className={styles.poke_info_wrapper}>
                <a href={'/pokemon/'+ pokeNavBack}>anterior</a> | <a href={'/pokemon/'+ pokeNavForward}>próximo</a>
                <h2>{pokemon.id}. {pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={"Imagem de um " + pokemon.name} />
                <div id="poke_types_wrapper" className={styles.pokemon_types}>
                    <span>Tipo: </span>
                    {mostrarTipo1()}{mostrarTipo2()}
                </div>
                <div className={styles.poke_stats}>
                    <h3>stats: <span>{hp_stat + atk_stat + def_stat + spatk_stat + spdef_stat + speed_stat}</span></h3>
                    <div> <span>HP:</span> <span>{hp_stat}</span> <div className={styles.stats_bar} style={{ width: hp_stat / 2 + "px" }}></div> </div>
                    <div> <span>ATK:</span> <span>{atk_stat}</span> <div className={styles.stats_bar} style={{ width: atk_stat / 2 + "px" }}></div> </div>
                    <div> <span>DEF:</span> <span>{def_stat}</span> <div className={styles.stats_bar} style={{ width: def_stat / 2 + "px" }}></div> </div>
                    <div> <span>SP_ATK:</span> <span>{spatk_stat}</span> <div className={styles.stats_bar} style={{ width: spatk_stat / 2 + "px" }}></div> </div>
                    <div> <span>SP_DEF:</span> <span>{spdef_stat}</span> <div className={styles.stats_bar} style={{ width: spdef_stat / 2 + "px" }}></div> </div>
                    <div> <span>SPEED:</span> <span>{speed_stat}</span> <div className={styles.stats_bar} style={{ width: speed_stat / 2 + "px" }}></div> </div>
                </div>
            </div>

        </div>
    );
}

export async function getStaticProps({ params }) {
    const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/'+params.id)
    .then((respostaDoServer) => {
        if(respostaDoServer.ok) {
            return respostaDoServer.json();
        }

        throw new Error('Não foi possível carregar o pokemon.')
    })
    .then((respostaEmObjeto) => {
        return respostaEmObjeto;
    })

    return {
        props: {
            pokemon
        }
    }
}

export async function getStaticPaths() {
    for (var i = 0 ; i < maxPokes ; i++ ) {
        pokeUnicoPaths.push( {params:{id:(i+1).toString(),}} );
    }

    return {
        paths: pokeUnicoPaths,
        fallback: false,
    };
}