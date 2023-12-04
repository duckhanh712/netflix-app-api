import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderItemDTO } from './dto';
import { handleResponse } from 'src/helpers';
import { OrderService } from 'src/order/order.service';

@Injectable({})
export class OrderItemService {
  constructor(private prisma: PrismaService, private Order: OrderService) {}

  getOrderItem(orderItemId: string) {
    return this.prisma.orderItem.findFirst({
      where: {
        id: +orderItemId,
      },
    });
  }

  getOrderItems(params: any) {
    const { orderId } = params;
    let conditions = {};

    if (orderId) {
      conditions = { ...conditions, orderId };
    }

    return this.prisma.orderItem.findMany({
      where: conditions,
    });
  }

  async createOrderItem(orderItemData: OrderItemDTO) {
    const { orderId } = orderItemData;
    const order = await this.Order.getOrder(orderId);
    if (!order)
      return handleResponse(
        HttpStatus.NOT_FOUND,
        `order: ${orderId} Not found`,
      );

    await this.prisma.orderItem.create({
      data: orderItemData,
    });

    return handleResponse(HttpStatus.OK);
  }

  updateOrderItem(orderItemId: number, orderItem: OrderItemDTO) {
    return this.prisma.orderItem.update({
      data: orderItem,
      where: { id: orderItemId },
    });
  }
}
