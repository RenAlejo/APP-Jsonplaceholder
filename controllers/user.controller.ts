import { Request, Response } from "express";
import HttpService from "../helpers/HttpService";
import moment from 'moment';
import { Users, User , Album , Posts } from "../interfaces/user.interface";

const http = new HttpService();

export const getUsers = async ( req: Request , res: Response ) => {

    const users:Users[] = await http.get( process.env.API_JPH_URL!+'/users' ).then( users => users ); 

    if(!users){
        return res.status(404).json({
            msg:"No se encontrarón usuarios"
        });
    }

    await http.post( process.env.API_URL! , {
        "date": moment().format(),
        "method": req.method,
        "response": users
    });

    res.status(200).json({
        users
    });

}

export const getSingleUser = async ( req: Request , res: Response ) => {

    const { id } = req.params;
    const users:Users[] = await http.get(  process.env.API_JPH_URL!+'/users' ).then( users => users ); 

    if(!users){
        return res.status(404).json({
            msg:"No se encontrarón usuarios"
        });
    }

    const user = users.find( user => {
        if( user.id == Number(id)) {
            return user;
        }
    });

    if(!user){
        return res.status(404).json({
            msg:`El usuario con id ${id} no existe en la base de datos`
        });
    }

    await http.post( process.env.API_URL!, {
        "date": moment().format(),
        "method": req.method,
        "response": user
    });

    res.status(200).json({
        user
    });

}

export const getUserPhotos = async ( req: Request , res: Response ) => {

    const { id } = req.params;
    const albums:Album[] = await http.get(  process.env.API_JPH_URL!+'/albums' ).then( albums => albums ); 

    if(!albums){
        return res.status(404).json({
            msg:"No se encontrarón álbumes"
        });
    }

    const photos = albums.filter( photos => {
        if( photos.userId == Number(id)) {
            return photos;
        }
    });

    if(!photos){
        return res.status(404).json({
            msg:`No se encontraron fotos`
        });
    }

    await http.post( process.env.API_URL! , {
        "date": moment().format(),
        "method": req.method,
        "response": photos
    });

    res.status(200).json({
        photos
    });

}

export const getUserPosts = async ( req: Request , res: Response ) => {

    const { id } = req.params;
    const posts:Posts[] = await http.get(  process.env.API_JPH_URL!+'/posts' ).then( posts => posts ); 

    if(!posts){
        return res.status(404).json({
            msg:"No se encontrarón publicaciones"
        });
    }

    const post = posts.filter( post => {
        if( post.userId == Number(id)) {
            return post;
        }
    });

    if(!post){
        return res.status(404).json({
            msg:`No se encontraron publicaciones`
        });
    }

    await http.post( process.env.API_URL! , {
        "date": moment().format(),
        "method": req.method,
        "response": post
    });

    res.status(200).json({
        post
    });

}



