import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class UserDTO {
    isEnable: boolean
    name: string
    role: number
    email: string
    password: string
    gender: boolean
    avatar: string
}