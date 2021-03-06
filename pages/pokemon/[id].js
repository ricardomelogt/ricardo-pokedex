import React from 'react';
import styles from '../../main-css/poke-page.module.css';

// especificar numero maximo de pokemons da pokedex por ordem crescente:
var maxPokes = 620;
var pokeUnicoPaths = [] //{params:{id:'1',}},{params:{id:'2',}},

export default function Pokemon( { pokemon, pokemonSpecies } ) {
    console.log(pokemon);

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

    pokemon.types.map((typesListItem) => {
        if (typesListItem.type.name == 'fairy') {
            typesListItem.type.name = 'normal';
        }
    })


    return(
        <div>
            <div className={styles.poke_info_wrapper}>

                <div class="top_nav_container">
                    <a href={'/pokemon/'+ pokeNavBack}>anterior</a> | <a href={'/pokemon/'+ pokeNavForward}>próximo</a>
                </div>

                <div class="poke_info_box">
                    <h2>{pokemon.id}. {pokemon.name}</h2>

                    <img src={pokemon.sprites.front_default} alt={"Imagem de um " + pokemon.name} />

                    <div id="poke_types_wrapper" className={styles.pokemon_types}>
                        <span>Type: </span>
                        {pokemon.types.map((typesListItem) => (
                            <span key={typesListItem.slot} className={'type_' + typesListItem.type.name + ' poke_type'}>{typesListItem.type.name}</span>
                        ))}
                    </div>

                    <div className="content_box">
                        <span>Abilities: </span>
                        {pokemon.abilities.map((typesListItem) => (
                            <span key={typesListItem.ability.name} className={'ability_text '+'is_hidden_' + typesListItem.is_hidden}>{typesListItem.ability.name} </span>
                        ))}
                    </div>

                    <div className="content_box">
                        <span>Egg groups: </span>
                        {pokemonSpecies.egg_groups.map((egg_group) => (
                            <span key={egg_group.name} className={'ability_text'}>{egg_group.name} </span>
                        ))}
                    </div>
                </div>

                <div className={styles.poke_stats}>
                    <h3>Total stats: <span>{hp_stat + atk_stat + def_stat + spatk_stat + spdef_stat + speed_stat}</span></h3>
                    <div> <span>HP:</span> <span>{hp_stat}</span> <div className={styles.stats_bar} style={{ width: hp_stat / 2 + "px" }}></div> </div>
                    <div> <span>ATK:</span> <span>{atk_stat}</span> <div className={styles.stats_bar} style={{ width: atk_stat / 2 + "px" }}></div> </div>
                    <div> <span>DEF:</span> <span>{def_stat}</span> <div className={styles.stats_bar} style={{ width: def_stat / 2 + "px" }}></div> </div>
                    <div> <span>SP_ATK:</span> <span>{spatk_stat}</span> <div className={styles.stats_bar} style={{ width: spatk_stat / 2 + "px" }}></div> </div>
                    <div> <span>SP_DEF:</span> <span>{spdef_stat}</span> <div className={styles.stats_bar} style={{ width: spdef_stat / 2 + "px" }}></div> </div>
                    <div> <span>SPEED:</span> <span>{speed_stat}</span> <div className={styles.stats_bar} style={{ width: speed_stat / 2 + "px" }}></div> </div>
                </div>

                <div className="content_box">
                    <h3>Moves: </h3>
                    {pokemon.moves.map((moveNode) => (
                        <span key={moveNode.move.name} className={'ability_text move_box ' + 'version_group_' + parseInt( moveNode.version_group_details[0].version_group.url[40] +  moveNode.version_group_details[0].version_group.url[41] ) }>{moveNode.move.name} </span>
                    ))}
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

    const pokemonSpecies = await fetch('https://pokeapi.co/api/v2/pokemon-species/'+params.id)
    .then((respostaDoServer) => {
        if(respostaDoServer.ok) {
            return respostaDoServer.json();
        }

        throw new Error('Não foi possível carregar os dados pokemonSpecies.')
    })
    .then((respostaEmObjeto) => {
        return respostaEmObjeto;
    })

    return {
        props: {
            pokemon,
            pokemonSpecies,
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