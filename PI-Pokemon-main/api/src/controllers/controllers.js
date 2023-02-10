//CONTROLADOR. FUNCIONES UTILIZADAS POR LAS RUTAS PARA EJECUTAR PETICIONES
const axios = require("axios");
const { Species, Pokemon } = require("../db.js");

const getApi = async () => {
  const apiUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
  const apiInfo = await apiUrl.data.results.map((element) => {
    console.log(element);
    return {
      name: element.title,
      image: element.image,
    };
  });
  return apiInfo;
};
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
