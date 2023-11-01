import { Controller, Get, Param, Response } from '@nestjs/common';
import { UserService } from './product.service';

@Controller('product')
export class ProductController {
    constructor( private userService: UserService) {}

    @Get(':productId')
    async profile(@Param('userId') userId: string , @Response() res) {
        const user = await this.userService.getUser(userId)

        return res.send(user)
    }
}
