import { Request , Response } from 'express';

export const getPosts = ( req: Request , res: Response ) => {

    const { id } = req.params;

    res.status(200).json({
        msg: 'getPost',
        id
    });
    
}

