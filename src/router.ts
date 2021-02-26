import { Router } from 'express';
import { userController } from './controllers/userController';
import { surveyController } from './controllers/surveyController';
import { sendMailController } from './controllers/sendMailController';

const router = Router();
const UserController = new userController();
const SurveysController = new surveyController();

const SendMailController = new sendMailController();

router.post('/users', UserController.create);

router.post('/surveys', SurveysController.create);
router.get('/surveys', SurveysController.show);

router.post('/sendMail', SendMailController.execute);

export { router }
