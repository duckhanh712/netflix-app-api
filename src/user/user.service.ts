import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDTO } from "./dto";

@Injectable({})//this is "Dependency Injection"
export class AuthService {
    register(authDTO: AuthDTO){
        return authDTO
        
    }

}