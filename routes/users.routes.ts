import { Router } from 'express';
import { 
    getSingleUser, 
    getUserPhoto, 
    getUserPosts, 
    getUsers } from '../controllers/users.controller';

const userRouter = Router();

userRouter.get('/', getUsers );
userRouter.get('/:id', getSingleUser );
userRouter.get('/photo/:id', getUserPhoto );
userRouter.get('/posts/:id', getUserPosts );


export default userRouter;