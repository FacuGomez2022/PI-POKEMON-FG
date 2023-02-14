//CONTROLADOR. FUNCIONES UTILIZADAS POR LAS RUTAS PARA EJECUTAR PETICIONES
const axios = require("axios");
const { Species, Pokemon } = require("../db.js");

const getApi = async () => {
  try {
  const apiUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=40%22`)

  const apiInfo = await apiUrl.data.results.map(element => axios.get(element.url))
    const apiResponse = await axios.all(apiInfo).then (r => r.map(p => {
      const apiAll = {
      img: p.data.sprites.front_default,
      name: p.data.forms[0].name,
      types: p.data.types[0].type.name,
      id: p.data.id,
      hp: p.data.stats[0].base_stat,
      attack: p.data.stats[1].base_stat,
      defense: p.data.stats[2].base_stat,
      speed: p.data.stats[5].base_stat,
      heigth: p.data.heigth,
      weigth: p.data.weight,
      }
      return apiAll;
    }))
    
    return apiResponse;
  }catch (error) {
    res.status(404)({error:error.message});
  }
 
}


const getDb = async () => {
  return await Pokemon.findAll({
    include: {
      model: Species,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
};

const getDbById = async (id) => {
  return await Pokemon.findByPk(id, {
    include: {
      model: Species,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
};

const getPokemonById = async (id) => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
};
const getAllPokemons = async () => {
  const infoApi = await getApi();
  const infoDB = await getDb();
  const infoEnd = infoApi.concat(infoDB);
  return infoEnd;
};
module.exports = {
  getAllPokemons,
  getDb,
  getDbById,
  getPokemonById,
  getApi,
};
