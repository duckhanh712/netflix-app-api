// import {
//   Body,
//   Controller,
//   Request,
//   Response,
//   Get,
//   Post,
//   HttpStatus,
// } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthDTO } from './dto';
// @Controller()
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @Post('register')
//   register(@Body() user: AuthDTO) {
//     return this.authService.register(user);
//   }

//   @Post('login')
//   async login(@Body() { email, password }, @Response() res) {
//     const { code, token } = await this.authService.login({ email, password });
//     return res.status(code).send({ token });
//   }
// }
