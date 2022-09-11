import axios, { Axios } from 'axios';

export default class HttpService {

    private http!: Axios;

    constructor(){
        this.http = axios;
    }

    async get( api_url: string ) {

        return this.http.get( api_url )
        .then( ( { data }:any ) => data )
        .catch( ( err ) => err );

    } 

    async post( api_url: string, body:Object ) {

        return this.http.post( api_url, body )
        .then( ( { data }:any ) =>  data )
        .catch( ( err ) => err );

    }

}
