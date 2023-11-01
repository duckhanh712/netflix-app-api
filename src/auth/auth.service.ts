// import { Injectable } from '@nestjs/common';
// import { AuthDTO } from './dto';
// import { PrismaService } from '../prisma/prisma.service';
// import { ConfigService } from '@nestjs/config';
// import { JwtService } from '@nestjs/jwt';
// import * as argon from 'argon2';
// interface LoginRequest {
//   email: string;
//   password: string;
// }
// @Injectable({})
// export class AuthService {
//   constructor(
//     private prisma: PrismaService,
//     private jwtService: JwtService,
//     private configService: ConfigService,
//   ) {}

//   async register(authDTO: AuthDTO) {
//     const hashedPassword = await argon.hash(authDTO.password);
//     return this.prisma.user.create({
//       data: {
//         name: authDTO.name,
//         email: authDTO.email,
//         password: hashedPassword,
//       },
//     });
//   }
//   async login(auth: LoginRequest) {
//     const user = await this.prisma.user.findUnique({
//       where: {
//         email: auth.email,
//       },
//     });

//     if (!user) {
//       return {
//         code: 404,
//         token: null,
//       };
//     }
//     const passwordMatched = await argon.verify(user.password, auth.password);
//     if (!passwordMatched) {
//       return {
//         code: 401,
//         token: null,
//       };
//     }

//     const {accessToken} =  await this.signJwtToken(user.id, user.email); 
//     return {
//       token: accessToken,
//       code: 200
//     }
//   }
//   async signJwtToken(
//     userId: number,
//     email: string,
//   ): Promise<{ accessToken: string }> {
//     const payload = {
//       sub: userId,
//       email,
//     };
//     const jwtString = await this.jwtService.signAsync(payload, {
//       expiresIn: '10m',
//       secret: this.configService.get('JWT_SECRET'),
//     });
//     return {
//       accessToken: jwtString,
//     };
//   }
// }
