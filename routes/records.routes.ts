import { Router } from 'express';
import { 
    deleteRecord, 
    getRecords, 
    getRecordsBase64, 
    postRecord, 
    putRecord } from '../controllers/records.controller';

const recordsRouter = Router();

recordsRouter.get('/', getRecords );
recordsRouter.get('/b64/:id', getRecordsBase64 );
recordsRouter.post('/ ', postRecord );
recordsRouter.put('/:id ', putRecord );
recordsRouter.delete('/:id ', deleteRecord );


export default recordsRouter;