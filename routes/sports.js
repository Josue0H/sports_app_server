const express = require('express');

const router = express.Router();

const { getTeams, getLeagues, getLeagueCountry, getSportLeagues, getTeam, getSports, getLeagueTeams, getCountries, getSearchTeam , getCountSportLeague, getLeagueByTeamInSpecific} = require('../controllers/sports.js');

router.get('/teams', getTeams);                                                 // Retorna todos los equipos
router.get('/leagues', getLeagues);                                             // Retorna todas las ligas
router.get('/sports', getSports);                                               // Retorna todos los deportes
router.get('/countries', getCountries);                                         // Retorna todos los países
router.get('/league-country/:idCountry', getLeagueCountry);                     // Retorna todoslas ligas que se practiquen en ese pais (enviar en params el id de la liga seleccionada)
router.get('/sport-leagues/:idSport', getSportLeagues);                         // Retorna todas las ligas que practiquen ese deporte (enviar en params el id del deporte seleccionado)
router.get('/league-teams/:idLeague', getLeagueTeams);                          // Retorna todos los equipos de una liga (enviar el id de la liga seleccionada)
router.get('/team/:idTeam', getTeam);                                           // Retorna la info del equipo seleccionado (enviar id del equipo)
router.get('/search-teams/:teamName', getSearchTeam);                           // Retorna todos los equipos que coincidan con el criterio de busqueda enviado (hace un like)
router.get('/search-count-sports-league', getCountSportLeague);                 // Retorna la cantidad de ligas que hay por cada deporte
router.get('/search-league-by-team-in-specific', getLeagueByTeamInSpecific);    // Retorna las ligas a las que pertenece ese equipo


//--------------------- OJO, LA RUTA QUE SE DEBE USAR PARA LLAMAR A LA API ES: localhost:8000/api/search-teams/barcelona (EJEMPLO) ---------------------

module.exports = router;
