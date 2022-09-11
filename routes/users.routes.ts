import { Router } from 'express';
import { check } from 'express-validator';
import { 
    getSingleUser, 
    getUserPhotos, 
    getUserPosts, 
    getUsers } from '../controllers/user.controller';
const userRouter = Router();
import validateRecord from '../middlewares/record.validator';

userRouter.get('/', getUsers );
userRouter.get('/:id',[
    check('id','El id ingresado no es un id válido').isNumeric(),
    validateRecord
],getSingleUser );
userRouter.get('/photo/:id',[
    check('id','El id ingresado no es un id válido').isNumeric(),
    validateRecord
],getUserPhotos );
userRouter.get('/posts/:id',[
    check('id','El id ingresado no es un id válido').isNumeric(),
    validateRecord
],getUserPosts );

export default userRouter;