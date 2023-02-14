// ORDENAMIENTO DEL INDEX CON SUS RUTAS.
const { Router } = require('express');
const pokemonRouter = require ('./pokemon')
const pokemonsRouter = require ('./pokemons');
const speciesRouter = require ('./species');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/pokemon", pokemonRouter);
router.use("/pokemons", pokemonsRouter);
router.use("/types", speciesRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
