const sql = require('mssql');

const configsql = {
    user: 'usersports',
    password: 'chivas123',
    server: 'localhost',
    database: 'Sports',
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


        var querystring = `select e.IDEquipo, NombreEquipo, NombreEstadio, CapacidadEstadio, UbicacionEstadio, StrImagenEquipo, StrImagenEstadio, AnnoFundacion, Descripcion, p.NombrePais Pais, l.NombreLiga Liga from Equipo e
                            join Pais p on e.IDPais=p.IDPais
                            join EquipoLiga el on el.IDEquipo=e.IDEquipo
                            join Liga l on l.IDLiga=el.IDLiga`;

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


        var querystring = `select * from Deporte`;

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


        var querystring = `select e.IDEquipo, NombreEquipo, NombreEstadio, CapacidadEstadio, UbicacionEstadio, StrImagenEquipo, StrImagenEstadio, AnnoFundacion, Descripcion, p.NombrePais Pais, l.NombreLiga Liga from Equipo e
                            join Pais p on e.IDPais=p.IDPais
                            join EquipoLiga el on el.IDEquipo=e.IDEquipo
                            join Liga l on l.IDLiga=el.IDLiga
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


        var querystring = `select IDLiga, NombreLiga, NombreAlterno, d.NombreDeporte Deporte from Liga l
                            join Deporte d on d.IDDeporte=l.IDDeporte`;

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

const getSportCountry = async (req, res) => {
    const countryName = req.params.countryName;

    sql.connect(configsql, (err) => {
        if(err){
            console.log(err);
        }


        var querystring = `select d.IDDeporte, NombreDeporte Deporte, p.NombrePais Pais from Deporte d
                            join DeportePais dp on dp.IDDeporte=d.IDDeporte
                            join Pais p on p.IDPais=dp.IDPais
                            where NombrePais like '%${countryName}%'`;

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


        var querystring = `select l.IDLiga, NombreLiga, NombreAlterno, d.NombreDeporte Deporte from Deporte d
                            join Liga l on l.IDDeporte=d.IDDeporte
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


        var querystring = `select e.IDEquipo, NombreEquipo, NombreEstadio, CapacidadEstadio, UbicacionEstadio, StrImagenEquipo, StrImagenEstadio, AnnoFundacion, Descripcion, p.NombrePais Pais, l.NombreLiga Liga from Equipo e
                            join Pais p on e.IDPais=p.IDPais
                            join EquipoLiga el on el.IDEquipo=e.IDEquipo
                            join Liga l on l.IDLiga=el.IDLiga
                            where e.NombreEquipo like '%${teamName}%'`;

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
    getSportCountry,
    getSportLeagues,
    getTeam,
    getSports,
    getLeagueTeams,
    getCountries,
    getSearchTeam
}