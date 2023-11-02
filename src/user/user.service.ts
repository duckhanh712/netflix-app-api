import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDTO } from './dto';

@Injectable({}) //this is "Dependency Injection"
export class UserService {
  constructor(private prisma: PrismaService) {}

  getUser(userId: number) {
    return this.prisma.user.findFirst({
      where: {
        id: +userId,
      },
    });
  }

  getUsers(params: any) {
    const { isEnable } = params;
    let conditions = {};
    if (isEnable) conditions = { ...conditions, isEnable: true };

    return this.prisma.user.findMany({
      where: conditions,
    });
  }

  updateUser(userId: number, user: UserDTO) {
    return this.prisma.user.update({
      data: user,
      where: { id: userId },
    });
  }
}
