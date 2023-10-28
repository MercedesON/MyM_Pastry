import { Router } from 'express';
import { signupUser, signinUser } from '../controllers/user';


const router = Router();

router.post('/', signupUser)
router.post('/login', signinUser)

export default router;