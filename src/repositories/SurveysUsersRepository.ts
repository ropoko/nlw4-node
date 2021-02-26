import { EntityRepository, Repository } from 'typeorm';
import { surveyUser } from '../models/surveyUser';

@EntityRepository(surveyUser)
class SurveysUsersRepository extends Repository<surveyUser> {
}

export { SurveysUsersRepository }