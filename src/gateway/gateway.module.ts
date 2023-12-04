import { Module } from '@nestjs/common';
import { GatewayController } from './gateway';
// import { GatewayService} from './gateway.service';

@Module({
  imports: [],
  controllers: [],
  providers: [GatewayController],
})

export class GatewayModule {}
