import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from 'src/DTO/creatuser.dto';
import { AuthDTO } from 'src/DTO/logindto';
import { User } from 'src/Schemas/UserSchemas';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private AuthModel:Model<User>){}
    async Register( UserDTO:UserDTO):Promise<User>{
        const saltOrRounds = 12;
        const password = UserDTO.pass;
        const hash = await bcrypt.hash(password, saltOrRounds);
        // { ...UserDTO, pass: hash } 3malna copier ll userdto wbadelna l pass 7atina fih hash
        const register=this.AuthModel.create({...UserDTO,pass:hash})
        const newuser = (await register).save()
        return newuser
    }

    async Login(email:string,pass:string):Promise<User>{
        const existuser=await this.AuthModel.findOne({email})
        const isMatch = await bcrypt.compare(pass,existuser.pass );
        if(existuser&&isMatch){
            return existuser
        }
        return null
    }
   
}
