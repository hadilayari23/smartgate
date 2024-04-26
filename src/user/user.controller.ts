import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from 'DTO/creatuser.dto';
import { User } from 'src/Schemas/UserSchemas';

@Controller('user')
export class UserController {constructor(private UserService:UserService){}

@Post('')
@UsePipes(new ValidationPipe())
@HttpCode(204)
createuser(@Body() UserDTO:UserDTO){
    //return this.UserService.create(UserDTO)
    return console.log(UserDTO)
}
@Get('')

async getAll():Promise<User[]>{
    const users = await this.UserService.getall();
    console.log(users);
    return users

}
}
