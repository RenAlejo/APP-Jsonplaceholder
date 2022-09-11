import express, { Application } from 'express';
import recordsRouter from '../routes/records.routes';
import userRouter from '../routes/users.routes';
import cors from 'cors';
import dbConnection from '../db/db.config';
import colors from 'colors/safe';


export default class Server {

    private _app    : Application;
    private _port   : string;
    private _paths  = {
        users   : '/api/users',
        records : '/api/records',
    }

    constructor() {
        this._app = express();
        this._port = process.env.PORT || '8080';
        // CONEXION A BASE DE DATOS
        this.database();
        // MIDDLEWARES DE LA APLICACIÓN
        this.middleWares();
        // RUTAS DE LA APLICACIÓN
        this.routes();
    }

    async database() {
        await dbConnection();
    }

    middleWares(){
        this._app.use( cors({}) );
        this._app.use( express.json() );
    }

    routes() {
        this._app.use( this._paths.users , userRouter );
        this._app.use( this._paths.records , recordsRouter );
    }

    listen(){
        this._app.listen( this._port , () => {
            console.log(colors.bgMagenta('Server listening on port: ' +  this._port));
        });
    }

}

