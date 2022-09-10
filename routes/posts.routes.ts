import { Router } from 'express';
import { getPosts } from '../controllers/posts.controller';

const postRoutes = Router();

postRoutes.get('/', getPosts );

export default postRoutes;





