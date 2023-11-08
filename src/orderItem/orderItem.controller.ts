// import {
//   Body,
//   Controller,
//   Get,
//   Param,
//   Post,
//   Query,
//   Response,
// } from '@nestjs/common';
// import { OrderItemService } from './orderItem.service';
// import { OrderItemDTO } from './dto';

// @Controller('order-items')
// export class OrderItemController {
//   constructor(private OrderItemService: OrderItemService) {}

//   @Get(':orderItemId')
//   async getOrderItem(@Param('orderItemId') orderItemId: string, @Response() res) {
//     const orderItem = await this.OrderItemService.getOrderItem(orderItemId);

//     return res.send(orderItem);
//   }
//   @Get('')
//   async getOrderItems(@Query() params: any, @Response() res) {
//     const orderItems = await this.OrderItemService.getOrderItems(params);

//     return res.send(orderItems);
//   }

//   @Post('')
//   async createorderItem(@Body() orderItemData: OrderItemDTO, @Response() res) {
//     const orderItem = await this.OrderItemService.createOrderItem(orderItemData);

//     return res.send(orderItem);
//   }
// }
