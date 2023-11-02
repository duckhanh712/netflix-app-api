import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class AuthDTO {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string
    isEnable: boolean
    role: number
    gender: boolean  
    avatar: string
}
