import { EntityRepository, Repository } from 'typeorm';
import { survey } from '../models/survey';

@EntityRepository(survey)
class SurveysRepository extends Repository<survey> {
    
}

export { SurveysRepository };