import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { user as userModel } from '../models/user'


class userController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const usersRepository = getRepository(userModel);

        const userAlreadyExists = await usersRepository.findOne({
            email 
        });

        if(userAlreadyExists) {
            return response.status(400).json({
                error: "User Already Exists"
            });
        }

        const user = usersRepository.create({
            name, 
            email
        });

        await usersRepository.save(user);

        return response.json(user);
    }
}

export { userController }