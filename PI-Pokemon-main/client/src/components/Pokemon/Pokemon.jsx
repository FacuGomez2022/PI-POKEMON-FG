import React, {useState, useEffect} from "react";
import { getPokemonsDetails } from "../../actions/";
import { useParams } from "react-router-dom";
//import { connect } from "react-redux";

export const Pokemon = () => {
  const { id } = useParams();
    console.log(id)
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
   detail();
  }, []);


  const movieID = useParams().id
  const movie = getPokemonsDetails(movieID)
  console.log(movie)
  console.log(movieID, 'este es el id')

  const detail = async () => {
    const data = await fetch(`http://localhost:3001/pokemons/${id}`);
    const pokemon = await data.json();
    
    setPokemon(pokemon);
    //console.log(pokemon.name)
  };
  

//   const prueba = async () => getPokemonsDetails(id);
//   console.log(prueba);


  return (
    <>
    <div>
    <p>${id}</p>
//     <div className="pokemon-detail">
//       <h3>{pokemon.name}</h3>
//       <p>{pokemon.types}</p>
//       <p>{pokemon.id}</p>
//       <p>{pokemon.hp}</p>
//       <img src={pokemon.img} alt="Img not found" />
//     </div>
        </div></>
  )
}
// export class Pokemon extends React.Component {
//     componentDidMount() {
//         const pokemonId = this.props.match.params.id;
//         console.log(this.props.match.params.id);
//         getPokemonDetails(pokemonId)
//         console.log(getPokemonDetails(pokemonId.json).payload)
//         console.log()
//     }

//     render(){
//   return (
//     <>
//     {/* <p>${pokemonId}</p>
//     <div className="pokemon-detail">
//       <h3>{pokemon.name}</h3>
//       <p>{pokemon.types}</p>
//       <p>{pokemon.id}</p>
//       <p>{pokemon.hp}</p>
//       <img src={pokemon.img} alt="Img not found" />
//     </div> */}
//     </>
//   );
// };
// }
// function mapStateToProps(state) {
//     return {
//         pokemon: state.pokemonDetail
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         getPokemonDetails: id => dispatch(getPokemonDetails(id)),
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)