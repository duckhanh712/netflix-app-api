import { Module } from '@nestjs/common';
import { ProductController } from './order.controller';
import { OrderService} from './order.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [ PrismaModule ],
  controllers: [ProductController],
  providers: [OrderService ]
})
export class OrderModule {}
