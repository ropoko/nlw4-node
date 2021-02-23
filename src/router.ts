import { Router } from 'express';
import { userController } from './controllers/userController';

const router = Router();
const UserController = new userController();

router.post('/users', UserController.create);   

export { router }
