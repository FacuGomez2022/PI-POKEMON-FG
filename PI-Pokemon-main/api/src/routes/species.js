const { Router } = require("express");

const axios = require("axios");
const { Species } = require("../db.js");

const router = Router();

const getApi = async () => {
  try {
    const speciesUrl = await axios.get(`https://pokeapi.co/api/v2/type`);

    const speciesInfo = await speciesUrl.data.results.map((element) =>
      axios.get(element.url),
      // Species.findOrCreate({
      //   where: { species: element.url.data.name}
      // })
    );
    const speciesResponse = await axios.all(speciesInfo).then((r) =>
      r.map((p) => {
        const speciesAll = {
          id: p.data.id,
          name: p.data.name,
        };
        Species.findOrCreate({
          where: { name: p.data.name}
        })
        return speciesAll;
      })
    );

    return speciesResponse;
  } catch (error) {
    res.status(404)({ error: error.message });
  }
};

router.get("/", async (req, res) => {
    let getSpecies = await getApi();
    console.log(getSpecies)

getSpecies ? res.status(200).json(getSpecies) : res.status(404).send("Specie not found")
    });

module.exports = router;
