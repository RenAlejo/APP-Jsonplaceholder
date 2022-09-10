import { Request , Response } from 'express';

export const getRecords = ( req: Request , res: Response ) => {
    res.json({
        msg: 'get record'
    });
}

export const getRecordsBase64 = ( req: Request , res: Response ) => {
    res.json({
        msg: 'get record b64'
    });
}

export const postRecord = ( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'Post recored'
    });
}


export const putRecord = ( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'Put record'
    });
}

export const deleteRecord = ( req: Request , res: Response ) => {
    res.json({
        msg: 'delete record'
    });
}




