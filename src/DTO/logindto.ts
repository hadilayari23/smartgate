import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator"

export class AuthDTO{
    @IsEmail()
    @IsNotEmpty()
    email:string
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    pass:string
}