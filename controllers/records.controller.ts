import { Request , Response } from 'express';
import Record from '../models/record.model';

export const getRecords = async ( req: Request , res: Response ):Promise<void> => {
    
    const { limit = 100, startAt = 0 } = req.query;

    const [ total, records ] = await Promise.all([
        Record.countDocuments(),
        Record.find()
              .skip(Number( startAt ))
              .limit(Number( limit ))
    ]);

    res.status(200).json({
        total,
        records
    });

}

export const getRecordsBase64 = async ( req: Request , res: Response ):Promise<void> => {
    
    const { id } = req.params;
    const record  = await Record.findById(id);
    const recordEncoded = btoa(JSON.stringify(record));

    res.status(200).json({
        record: recordEncoded
    });

}

export const postRecord = async ( req: Request , res: Response ):Promise<void> => {
    
    const  { date , method, response }  = req.body;
    const record = new Record( { date , method, response } );
    await record.save();

    res.status(200).json({
        msg: 'Registro guardado con éxito',
        record
    });

}

export const putRecord = async ( req: Request , res: Response ):Promise<void> => {

    const { id } = req.params;
    const { date , method, response }  = req.body;
    
    const record = await Record.findByIdAndUpdate( id , { date , method, response } );

    res.status(200).json({
        msg: 'Registro actualizado con éxito',
        record
    });

}

export const deleteRecord = async ( req: Request , res: Response ):Promise<void> => {
    
    const { id } = req.params;

    const [ total, record ] = await Promise.all([
        Record.countDocuments(),
        Record.findByIdAndDelete( id )
    ]);

    res.status(200).json({
        msg: 'Registro borrado con éxito',
        total,
        record
    });

}

// ACTIVAR PARA REALIZAR BORRADO LÓGICO Y NO FISICO DE LA BASE DE DATOS

// export const deleteRecord = async ( req: Request , res: Response ):Promise<void> => {
    
//     const { id } = req.params;
//     const [ total, record ] = await Promise.all([
//         Record.countDocuments({ active: true }),
//         Record.findByIdAndUpdate( id, { active: false } )
//     ]);
    
//     res.status(200).json({
//         msg: 'Registro borrado con éxito',
//         total,
//         record
//     });

// }






