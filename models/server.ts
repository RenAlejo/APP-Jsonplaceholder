import express, { Application } from 'express';
import postRoutes from '../routes/posts.routes';
import recordsRouter from '../routes/records.routes';
import userRouter from '../routes/users.routes';

export default class Server {

    private _app    : Application;
    private _port   : string;
    private _paths  = {
        users   : '/api/users',
        posts   : '/api/posts',
        records : '/api/records',
    }

    constructor() {
        this._app = express();
        this._port = process.env.PORT || '8080';
        this.routes();
    }

    routes() {
        this._app.use( this._paths.users , userRouter );
        this._app.use( this._paths.posts , postRoutes );
        this._app.use( this._paths.records , recordsRouter );
    }

    listen(){
        this._app.listen( this._port , () => {
            console.log('Server listening on port: ' +  this._port );
        });
    }

}

