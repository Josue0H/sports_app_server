const sql = require('mssql');

const configsql = {
    user: 'AlanSports1',
    password: 'amigo123',
    server: 'localhost',
    database: 'GeneralSports',
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true
    }
};

const getTeams = async (req, res) => {
    sql.connect(configsql, (err) => {
        if(err){
            console.log(err);
        }


        var querystring = `select e.IDEquipo, NombreEquipo, NombreEstadio, CapacidadEstadio, UbicacionEstadio, StrImagenEquipo, StrImagenEstadio, AnnoFundacion, Descripcion, p.NombrePais Pais from Equipo e
                            join Pais p on e.IDPais=p.IDPais`;

        var sqlrequest = new sql.Request();

        sqlrequest.query(querystring, (err, recordset) => {
            if(err){
                console.log(err);
            }
            res.send(recordset);
        });

    });
}

const getSports = async (req, res) => {
    sql.connect(configsql, (err) => {
        if(err){
            console.log(err);
        }


        var querystring = `select IDDeporte, NombreDeporte from Deporte`;

        var sqlrequest = new sql.Request();

        sqlrequest.query(querystring, (err, recordset) => {
            if(err){
                console.log(err);
            }
            res.send(recordset);
        });

    });
}

const getCountries = async (req, res) => {
    sql.connect(configsql, (err) => {
        if(err){
            console.log(err);
        }


        var querystring = `select * from Pais`;

        var sqlrequest = new sql.Request();

        sqlrequest.query(querystring, (err, recordset) => {
            if(err){
                console.log(err);
            }
            res.send(recordset);
        });

    });
}

const getTeam = async (req, res) => {
    const idTeam = req.params.idTeam;

    sql.connect(configsql, (err) => {
        if(err){
            console.log(err);
        }


        var querystring = `select e.IDEquipo, NombreEquipo, NombreAlternoEquipo, NombreEstadio, CapacidadEstadio, UbicacionEstadio, StrImagenEquipo, StrImagenEstadio, StrBanner, StrJersey, genero, AnnoFundacion, Descripcion, p.NombrePais Pais from Equipo e
                            join Pais p on e.IDPais=p.IDPais
                            where e.IDEquipo=${idTeam}`;

        var sqlrequest = new sql.Request();

        sqlrequest.query(querystring, (err, recordset) => {
            if(err){
                console.log(err);
            }
            res.send(recordset);
        });

    });
}

const getLeagues = async (req, res) => {
    sql.connect(configsql, (err) => {
        if(err){
            console.log(err);
        }


        var querystring = `select IDLiga, NombreLiga, NombreAlterno, d.NombreDeporte Deporte, p.NombrePais Pais from Liga l
                            join Deporte d on d.IDDeporte=l.IDDeporte
                            join Pais p on p.IDPais=l.IDPais`;

        var sqlrequest = new sql.Request();

        sqlrequest.query(querystring, (err, recordset) => {
            if(err){
                console.log(err);
            }
            res.send(recordset);
        });

    });
}

const getLeagueTeams = async (req, res) => {

    const idLeague = req.params.idLeague;

    sql.connect(configsql, (err) => {
        if(err){
            console.log(err);
        }


        var querystring = `select e.IDEquipo, NombreEquipo, NombreEstadio, CapacidadEstadio, UbicacionEstadio, StrImagenEquipo, StrImagenEstadio, AnnoFundacion, Descripcion, p.NombrePais Pais, l.NombreLiga Liga from Equipo e
                            join Pais p on e.IDPais=p.IDPais
                            join EquipoLiga el on el.IDEquipo=e.IDEquipo
                            join Liga l on l.IDLiga=el.IDLiga
                            where l.IDLiga=${idLeague}`;

        var sqlrequest = new sql.Request();

        sqlrequest.query(querystring, (err, recordset) => {
            if(err){
                console.log(err);
            }
            res.send(recordset);
        });

    });
}

const getLeagueCountry = async (req, res) => {
    const idCountry = req.params.idCountry;

    sql.connect(configsql, (err) => {
        if(err){
            console.log(err);
        }


        var querystring = `select l.IDLiga, l.NombreLiga, l.NombreAlterno, d.NombreDeporte Deporte, p.NombrePais Pais from Liga l
                            join Deporte d on d.IDDeporte=l.IDDeporte
                            join Pais p on p.IDPais=l.IDPais
                            where p.IDPais=${idCountry}`;

        var sqlrequest = new sql.Request();

        sqlrequest.query(querystring, (err, recordset) => {
            if(err){
                console.log(err);
            }
            res.send(recordset);
        });

    });
}

const getSportLeagues = async (req, res) => {
    const idSport = req.params.idSport;

    sql.connect(configsql, (err) => {
        if(err){
            console.log(err);
        }


        var querystring = `select l.IDLiga, NombreLiga, NombreAlterno, d.NombreDeporte Deporte, p.NombrePais Pais from Deporte d
                            join Liga l on l.IDDeporte=d.IDDeporte
                            join Pais p on p.IDPais=l.IDPais
                            where d.IDDeporte=${idSport}`;

        var sqlrequest = new sql.Request();

        sqlrequest.query(querystring, (err, recordset) => {
            if(err){
                console.log(err);
            }
            res.send(recordset);
        });

    });
}

const getSearchTeam = async (req, res) => {
    const teamName = req.params.teamName;

    sql.connect(configsql, (err) => {
        if(err){
            console.log(err);
        }


        // var querystring = `select e.IDEquipo, NombreEquipo, NombreEstadio, CapacidadEstadio, UbicacionEstadio, StrImagenEquipo, StrImagenEstadio, AnnoFundacion, Descripcion, p.NombrePais Pais, l.NombreLiga Liga from Equipo e
        //                     join Pais p on e.IDPais=p.IDPais
        //                     join EquipoLiga el on el.IDEquipo=e.IDEquipo
        //                     join Liga l on l.IDLiga=el.IDLiga
        //                     where e.NombreEquipo like '%${teamName}%'`;

        var querystring = `select e.IDEquipo, NombreEquipo, NombreEstadio, CapacidadEstadio, UbicacionEstadio, StrImagenEquipo, StrImagenEstadio, AnnoFundacion, Descripcion, p.NombrePais Pais 
                            from Equipo e
                            join Pais p on e.IDPais=p.IDPais
                            where e.NombreEquipo like '%${teamName}%'
                            order by NombreEquipo`;

        var sqlrequest = new sql.Request();

        sqlrequest.query(querystring, (err, recordset) => {
            if(err){
                console.log(err);
            }
            res.send(recordset);
        });

    });
}

const getCountSportLeague = async (req, res) => {
    sql.connect(configsql, (err) => {
        if(err){
            console.log(err);
        }


        var querystring =   `select d.NombreDeporte NombreDeporte, count(1) Cantidad
                            from Deporte d
                            join Liga l on l.IDDeporte=d.IDDeporte
                            group by d.NombreDeporte
                            order by count(1)`;

        var sqlrequest = new sql.Request();

        sqlrequest.query(querystring, (err, recordset) => {
            if(err){
                console.log(err);
            }
            res.send(recordset);
        });

    });
}

const getLeagueByTeamInSpecific = async (req, res) => {
    const idTeam = req.params.idTeam;

    sql.connect(configsql, (err) => {
        if(err){
            console.log(err);
        }

        var querystring = `select l.IDLiga, l.NombreLiga
                            from Equipo e
                            join Pais p on e.IDPais=p.IDPais
                            join EquipoLiga el on el.IDEquipo=e.IDEquipo
                            join Liga l on l.IDLiga=el.IDLiga
                            where e.IDEquipo=${idTeam}
                            order by l.NombreLiga`

        var sqlrequest = new sql.Request();

        sqlrequest.query(querystring, (err, recordset) => {
            if(err){
                console.log(err);
            }
            res.send(recordset);
        });

    });
}

module.exports = {
    getTeams,
    getLeagues,
    getLeagueCountry,
    getSportLeagues,
    getTeam,
    getSports,
    getLeagueTeams,
    getCountries,
    getSearchTeam,
    getCountSportLeague,
    getLeagueByTeamInSpecific
}