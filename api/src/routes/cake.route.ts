import {Router} from 'express';
import { getCakes } from '../controllers/cake';
import validateToken from './validate-token';

const router=Router();
router.get('/',validateToken, getCakes)

export default router;