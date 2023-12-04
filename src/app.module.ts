import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { DiscountModule } from './discount/discount.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './orderItem/orderItem.module';
import { GatewayModule } from './gateway/gateway.module';
@Module({
  imports: [
    UserModule,
    ProductModule,
    AuthModule,
    DiscountModule,
    OrderModule,
    OrderItemModule,
    GatewayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
