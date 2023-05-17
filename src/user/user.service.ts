import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDTO } from "./dto";

@Injectable({})//this is "Dependency Injection"
export class UserService {
    constructor(
        private prisma: PrismaService,

      ) {}
    getUser(userId: string){
        return this.prisma.user.findFirst({
            where: {
                id: +userId
            }
        })
        
    }

}