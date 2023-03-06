//RUTA POST RECIPES. Creación de post desde Recipes teniendo en cuenta la información que llega desde el Body.
const { Router } = require("express");
const { Pokemon, Species } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  try {
    let { name, types, hp, attack, defense, speed, height, weight } = req.body;
    let pokemonsCreate = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });
    let speciesPokemonDb = await Species.findAll({
      where: { name: types }
    });
    pokemonsCreate.addSpecies(speciesPokemonDb);
    res.status(200).send(pokemonsCreate);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
