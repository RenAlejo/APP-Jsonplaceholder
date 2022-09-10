import { Request , Response } from 'express';

export const getPosts = ( req: Request , res: Response ) => {

    const { id } = req.params;

    res.json({
        msg: 'getPost',
        id
    });
}

