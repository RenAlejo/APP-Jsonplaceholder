import { Request, Response } from "express";

export const getUsers = ( req: Request , res: Response ) => {
    res.json({
        msg: 'getUser'
    });
}

export const getSingleUser = ( req: Request , res: Response ) => {

    const { id } = req.params;

    res.json({
        msg: 'getSingleUser',
        id
    });

}

export const getUserPhoto = ( req: Request , res: Response ) => {

    const { id } = req.params;

    res.json({
        msg: 'getUserById',
        id
    });

}

export const getUserPosts = ( req: Request , res: Response ) => {

    const { id } = req.params;

    res.json({
        msg: 'getUserById',
        id
    });

}



