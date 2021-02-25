import { Entity, EntityRepository, Repository } from 'typeorm';
import { user } from '../models/user';

@EntityRepository(user)
class UsersRepository extends Repository<user> {
    
}

export { UsersRepository };