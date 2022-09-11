import  { Request, Response, NextFunction } from 'express';
const { validationResult } = require('express-validator');


const validateRecord = ( req: Request, res: Response, next: NextFunction ) => {
   
    const errors = validationResult(req);
   
    if( !errors.isEmpty() ) {
        return res.status(400).json(errors);
    }
   
    next();
}

export default validateRecord;

