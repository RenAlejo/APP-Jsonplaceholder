import { Router } from 'express';
// import { check } from 'express-validator/check'
import { deleteRecord, getRecords, getRecordsBase64, postRecord, putRecord } from '../controllers/records.controller';
import { isValidHttpMethod, isAnExistingRecordId } from '../db/db.validators';
import validateRecord from '../middlewares/record.validator';
    
const { check } = require('express-validator');
const recordsRouter = Router();

recordsRouter.post('/',[
    check('date','Formato de fecha incorrecto.').isISO8601().toDate(),
    check('date','Date es un campo obligatorio.').not().isEmpty(),
    check('response','Response es un campo obligatorio.').not().isEmpty(),
    check('method','Method es un campo obligatorio.').not().isEmpty(),
    check('method','El método debe tener entre 3 y 6 letras.').isLength({ min: 3, max: 8}),
    check('method').custom( isValidHttpMethod ),
    validateRecord
],postRecord);

recordsRouter.get('/',getRecords);

recordsRouter.get('/b64/:id',[
    check('id','El id ingresado no es un id válido').isMongoId(),
    check('id').custom( isAnExistingRecordId ),
    validateRecord
],getRecordsBase64 );

recordsRouter.put('/:id', [
    check('id','El id ingresado no es un id válido').isMongoId(),
    check('id').custom( isAnExistingRecordId ),
    check('date','Formato de fecha incorrecto.').isISO8601().toDate(),
    check('date','Date es un campo obligatorio.').not().isEmpty(),
    check('response','Response es un campo obligatorio.').not().isEmpty(),
    check('method','Method es un campo obligatorio.').not().isEmpty(),
    check('method','El método debe tener entre 3 y 6 letras.').isLength({ min: 3, max: 8}),
    check('method').custom( isValidHttpMethod ),
    validateRecord
], putRecord );

recordsRouter.delete('/:id',[
    check('id','El id ingresado no es un id válido').isMongoId(),
    check('id').custom( isAnExistingRecordId ),
    validateRecord
],deleteRecord );


export default recordsRouter;