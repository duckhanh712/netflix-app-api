import { Module } from '@nestjs/common';
import { GatewayController } from './gateway';
// import { GatewayService} from './gateway.service';

@Module({
  providers: [GatewayController],
})
export class GatewayModule {}
