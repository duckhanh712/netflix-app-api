import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { UserService} from './product.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [ PrismaModule ],
  controllers: [ProductController],
  providers: [UserService ]
})
export class UserModule {}
