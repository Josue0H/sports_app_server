const express = require('express');

const router = express.Router();

const { getTeams, getLeagues, getSportCountry, getSportLeagues, getTeam, getSports, getLeagueTeams, getCountries, getSearchTeam } = require('../controllers/sports.js');

router.get('/teams', getTeams);                             // Retorna todos los equipos
router.get('/leagues', getLeagues);                         // Retorna todas las ligas
router.get('/sports', getSports);                           // Retorna todos los deportes
router.get('/countries', getCountries);                     // Retorna todos los países
router.get('/sport-country/:countryName', getSportCountry); // Retorna todos los deportes que se practiquen en ese pais (hace un like para comparar el nombre del pais)
router.get('/sport-leagues/:idSport', getSportLeagues);     // Retorna todas las ligas que practiquen ese deporte (enviar en params el id del deporte seleccionado)
router.get('/league-teams/:idLeague', getLeagueTeams);      // Retorna todos los equipos de una liga (enviar el id de la liga seleccionada)
router.get('/team/:idTeam', getTeam);                       // Retorna la info del equipo seleccionado (enviar id del equipo)
router.get('/search-teams/:teamName', getSearchTeam);       // Retorna todos los equipos que coincidan con el criterio de busqueda enviado (hace un like)


module.exports = router;