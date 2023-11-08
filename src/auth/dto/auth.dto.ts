import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class AuthDTO {

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string

    isEnable: boolean

    @IsNotEmpty()
    role: number

    gender: boolean  
    
    avatar: string
}
