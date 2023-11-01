import { Module } from '@nestjs/common';
// import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
// import { GatewayModule } from './gateway/gateway.module';
@Module({
  imports: [ UserModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
