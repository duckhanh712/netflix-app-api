import { Module } from '@nestjs/common';
import { OrderItemController } from './orderItem.controller';
import { OrderItemService } from './orderItem.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { OrderService } from 'src/order/order.service';

@Module({
  imports: [PrismaModule],
  controllers: [OrderItemController],
  providers: [OrderItemService, OrderService],
})
export class OrderItemModule {}
