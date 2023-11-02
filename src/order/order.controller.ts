import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Response,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDTO } from './dto';

@Controller('orders')
export class OrderController {
  constructor(private OrderService: OrderService) {}

  @Get(':orderId')
  async getOrder(@Param('orderId') orderId: number, @Response() res) {
    const order = await this.OrderService.getOrder(orderId);

    return res.send(order);
  }
  @Get('')
  async getOrders(@Query('isEnable') isEnable: boolean, @Response() res) {
    const order = await this.OrderService.getOrders({ isEnable });

    return res.send(order);
  }

  @Post('')
  async createOrder(@Body() productData: OrderDTO, @Response() res) {
    const order = await this.OrderService.createOrder(productData);

    return res.send(order);
  }
}
