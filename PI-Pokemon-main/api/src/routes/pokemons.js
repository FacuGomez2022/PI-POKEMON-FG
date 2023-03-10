//GET POKEMONS CON TODAS LAS RUTAS POSIBLES
// GET POKEMONS POR ID INCLUYENDO LOS CARGADOS EN LA DB.

const { Router } = require("express");
const {
  getAllPokemons,
  getDbById,
  getPokemonById,
} = require("../controllers/controllers.js");

const router = Router();

router.get("/", async (req, res) => {
  const name = req.query.name;
  let getPokemons = await getAllPokemons();
  if (name) {
    let getPokemons2 = getPokemons.find(e =>
      e.name.toLowerCase() === name.toLowerCase());
      getPokemons2 ? res.status(200).json(getPokemons2) : res.status(404).send("Pokemon not found")
  } else {
    return res.status(200).json(getPokemons);
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id.includes("-")) {
      let dbPokemonsById = await getDbById(id);
      return res.status(200).json(dbPokemonsById);
    } else {
      let apiPokemons = await getPokemonById(id);
      if (apiPokemons.data.id) {
        let pokemon = {
          img: apiPokemons.data.sprites.other.dream_world.front_default,
          name: apiPokemons.data.forms[0].name,
          types: apiPokemons.data.types[0].type.name,
          id: apiPokemons.data.id,
          hp: apiPokemons.data.stats[0].base_stat, 
          attack: apiPokemons.data.stats[1].base_stat,
          defense:apiPokemons.data.stats[2].base_stat,
          speed:apiPokemons.data.stats[5].base_stat,
          height: apiPokemons.data.height,
          weight:  apiPokemons.data.weight,
        };
        return res.status(200).send(pokemon);
      }
    }
  } catch (error) {
    return res.status(404).send("Pokemon no encontrado");
  }
});

module.exports = router;
