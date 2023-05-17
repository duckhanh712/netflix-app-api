import { Controller, Get, Param, Response } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor( private userService: UserService) {}

    @Get(':userId')
    async profile(@Param('userId') userId: string , @Response() res) {
        const user = await this.userService.getUser(userId)

        return res.send(user)
    }
}
