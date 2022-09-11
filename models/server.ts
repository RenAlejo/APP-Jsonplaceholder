import express, { Application } from 'express';
import recordsRouter from '../routes/records.routes';
import userRouter from '../routes/users.routes';
import cors from 'cors';
import dbConnection from '../db/db.config';
import colors from 'colors/safe';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './../swagger.json';

export default class Server {

    private _app    : Application;
    private _port   : string;
    private _paths  = {
        users   : '/api/users',
        records : '/api/records',
        swagger : '/api/swagger',
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
        this._app.use( this._paths.swagger , swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }

    listen(){
        this._app.listen( this._port , () => {
            console.log(colors.bgMagenta('Server listening on port: ' +  this._port));
        });
    }

}

