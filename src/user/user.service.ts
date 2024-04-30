import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDTO } from 'src/DTO/creatuser.dto';
import { UpdateUserDto } from 'src/DTO/updateuser.dto';
import { Model } from 'mongoose';
import { User } from 'src/Schemas/UserSchemas';
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModel:Model<User>){

    }
    /////create///////
    async  create(UserDTO:UserDTO):Promise<User>{
  
            try {
                const newUser = new this.UserModel(UserDTO);
            
        
            const savedUser = await newUser.save();
            console.log(savedUser)

            return savedUser;
                
            } catch (error) {
                return error
            }
            
    }
////////getAll////////
async getall():Promise<User[]>{
    try {
        const existUsers = await this.UserModel.find().exec();
    return existUsers;
    } catch (error) {
        return error
    }
    
}
///////////////////getbyid/////////
async getById(id:string):Promise<User>{
    try{  
        const existUser= await this.UserModel.findById(id)
        return existUser
    }
  catch(error){
    return error
  }
}
////////////////update/////////
async Update(id: string, UpdateUserDto: UpdateUserDto): Promise<User> {
    try {
        // Check if another user with the same email exists
        const existingUser = await this.UserModel.findOne({ email: UpdateUserDto.email });
        if (existingUser && existingUser._id.toString() !== id) {
            throw new Error('Duplicate email address');
        }

        // Proceed with the update if there's no conflict
        const UpdatedUser = await this.UserModel.findByIdAndUpdate(id, UpdateUserDto);
        return UpdatedUser;
    } catch (error) {
        throw error; // Let the caller handle the error
    }
}
//////////////////////Delete//////////////////////////////////////
async Delete(id:string):Promise<User>{
    try{
        const DeletedUser = await this.UserModel.findByIdAndDelete(id)
        if (DeletedUser) {
            return DeletedUser
        }

    }
    catch(error){
        return error
    }
}
}
