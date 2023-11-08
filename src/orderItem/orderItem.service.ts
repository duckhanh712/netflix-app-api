// import { HttpStatus, Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// // import { OrderService }
// import { OrderItemDTO } from './dto';
// import { handleResponse } from 'src/helpers';

// @Injectable({})
// export class OrderItemService {
//   constructor(private prisma: PrismaService) {}

//   getOrderItem(orderItemId: string) {
//     return this.prisma.orderItem.findFirst({
//       where: {
//         id: +orderItemId,
//       },
//     });
//   }

//   getOrderItems(params: any) {
//     const { orderId } = params;
//     let conditions = {};

//     if (orderId) {
//       conditions = { ...conditions, orderId };
//     }

//     return this.prisma.orderItem.findMany({
//       where: conditions,
//     });
//   }

//   createOrderItem(orderItem: OrderItemDTO) {
//     const { orderId } = orderItem;
//     // const order = await OrderService.getOrder(orderId)
//     if (true) return handleResponse(HttpStatus.NOT_FOUND);

//     return this.prisma.orderItem.create({
//       data: orderItem,
//     });
//   }

//   updateOrderItem(orderItemId: number, orderItem: OrderItemDTO) {
//     return this.prisma.orderItem.update({
//       data: orderItem,
//       where: { id: orderItemId },
//     });
//   }
// }
