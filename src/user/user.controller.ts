import { Controller, Delete, Get, Param, Patch, Response } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor( private userService: UserService) {}

    @Get(':userId')
    async profile(@Param('userId') userId: number , @Response() res) {
        const user = await this.userService.getUser(userId)

        return res.send(user)
    }

    @Patch()
    async update(@Param('userId') userId: number , @Response() res) {
        const user = await this.userService.getUser(userId)

        return res.send(user)
    }

    @Delete(':userId')
    async delete(@Param('userId') userId: number , @Response() res) {
        const user = await this.userService.getUser(userId)

        return res.send(user)
    }
}
