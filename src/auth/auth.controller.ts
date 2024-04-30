import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/Schemas/UserSchemas';
import { UserDTO } from 'src/DTO/creatuser.dto';

import { AuthDTO } from 'src/DTO/logindto';

@Controller('auth')
export class AuthController {
    constructor(private AuthService:AuthService){}

@Post("signup")
async Register(@Body() UserDTO:UserDTO , @Res()res):Promise <User>{

const newUser = await this.AuthService.Register(UserDTO);
        
if(newUser){
    return res.status(HttpStatus.CREATED).json({message:"user has been created!",data:newUser})
}
return res.status(HttpStatus.CREATED).json({message:"user has been created!"})
}


//#######################################################################################################################################
@Post()
async Login(@Body() AuthDTO: AuthDTO, @Res() res): Promise<User> {
  return
}
}
