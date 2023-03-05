import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsDetails } from "../../actions/";
import { useParams } from "react-router-dom";
//import { connect } from "react-redux";

export const Pokemon = () => {
  const dispatch = useDispatch()
  const { id } = useParams();

  const pokemon = useSelector((state) => state.pokemonDetail)
  useEffect(() => {
    dispatch(getPokemonsDetails(id))
    
  },
  [])

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