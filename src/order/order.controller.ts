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
export class ProductController {
  constructor(private OrderService: OrderService) {}

  @Get(':orderId')
  async getOrder(@Param('orderId') orderId: string, @Response() res) {
    const order = await this.OrderService.getOrder(orderId);

    return res.send(order);
  }
  @Get('')
  async getOrders(@Query() params: any, @Response() res) {
    const order = await this.OrderService.getOrders(params);

    return res.send(order);
  }

  @Post('')
  async createOrder(@Body() productData: OrderDTO, @Response() res) {
    const order = await this.OrderService.createOrder(productData);

    return res.send(order);
  }
}
