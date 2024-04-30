import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from 'src/DTO/creatuser.dto';
import { User } from 'src/Schemas/UserSchemas';
import { UpdateUserDto } from 'src/DTO/updateuser.dto';

@Controller('user')
export class UserController {constructor(private UserService:UserService){}

@Post('')
@UsePipes(new ValidationPipe())

async createUser(@Res() res, @Body() userDTO: UserDTO): Promise<User> {
    try {
      const newUser = await this.UserService.create(userDTO);
      return res.status(HttpStatus.CREATED).json({message: 'Success: User created!', newUser })
    } catch (error) {
  
      return res.status(HttpStatus.BAD_REQUEST)
      .json({
        statusCode: 400,
        message: 'Error: User not created!',
        error: 'Bad Request'
    })
    }
  }

@Get('')

async getAll():Promise<User[]>{
    const users = await this.UserService.getall();
    console.log(users);
    return users

}
@Get(':id')
async GetById(@Param('id') id :string , @Res() res):Promise<User>{
    const existUser = await this.UserService.getById(id)
   if (existUser) {
    return res.status(HttpStatus.OK).json({message:'Success:User found',data:existUser})
   }
   return res.status(HttpStatus.NOT_FOUND).json({message:'Error:User not found'})

}

@Put(':id')
async update(@Res() res, @Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
  try {
    const updatedUser = await this.UserService.Update(id, updateUserDto);
    if (updatedUser) {
      return res.status(HttpStatus.OK).json({ message: 'Success: User updated!', data: updatedUser });
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Error: User not updated. Please try again!' });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to update user. Please try again later.',error });
  }
}
@Delete(':id')
async Delete( @Param('id') id:string , @Res() res):Promise<User>{
const DeletedUser=this.UserService.Delete(id)
if (DeletedUser) {
    return res.status(HttpStatus.OK).json({ message: 'Success: User deleted' });
}
return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Error: user not found !' });
}
}
