import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDTO } from 'DTO/creatuser.dto';
import { Model } from 'mongoose';
import { User } from 'src/Schemas/UserSchemas';
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModel:Model<User>){

    }
    /////create///////
    async  create(UserDTO:UserDTO):Promise<User>{
        const newUser = new this.UserModel(UserDTO);
        const savedUser = await newUser.save();
        return savedUser;
    }
////////getAll////////
async getall():Promise<User[]>{
    const existUsers = await this.UserModel.find().exec();
    return existUsers;
}
}
