import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator"

export class UserDTO{
    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    name:String
    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    lastname:string
    @IsEmail()
    @IsNotEmpty()
    email:string
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    pass:string
}