import React from 'react';
import styles from '../main-css/main-style.module.css';


export async function getStaticProps(context) {

    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
        .then((respostaDoServer) => {
            if(respostaDoServer.ok) {
                return respostaDoServer.json();
            }
        })
        .then((respostaEmObjeto) => {
            return respostaEmObjeto.pokemon_entries;
        })

    return {
      props: {
          pokemons
      }, // will be passed to the page component as props
    }
  }

export default function Home(props) {

    const { pokemons } = props;

    return (
        <div className={styles.main_wrapper}>
            <h1 className={styles.dex_title_main}>PokéDex</h1>
            <p>by: Ricardo Melo</p>
            <p>github: ricardomelogt</p>
            <p>API used: <a href="https://pokeapi.co/" >https://pokeapi.co/</a></p>
            <p><strong> work in progress... </strong></p>

            <ul className={styles.poke_list}>
                {pokemons.map((pokemon) => (
                    <li className={styles.poke_list_item} key={pokemon.entry_number}>
                            <a href={'/pokemon/'+pokemon.entry_number} >
                            <img className={styles.pokeListPic} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemon.entry_number+".png"} alt={"Imagem de um "+pokemon.pokemon_species.name}/>
                            <span className={styles.pokeListText}>{pokemon.entry_number} - {pokemon.pokemon_species.name}</span>
                            </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}