import { Router } from 'express';
import { userController } from './controllers/userController';
import { surveyController } from './controllers/surveyController';

const router = Router();
const UserController = new userController();
const SurveysController = new surveyController();

router.post('/users', UserController.create);

router.post('/surveys', SurveysController.create);
router.get('/surveys', SurveysController.show);

export { router }
