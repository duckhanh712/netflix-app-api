import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderDTO } from './dto';

@Injectable({}) 
export class OrderService {
  constructor(private prisma: PrismaService) {}

  getOrder(orderId: number) {
    return this.prisma.order.findFirst({
      where: {
        id: +orderId,
      },
    });
  }

  getOrders(params: any) {
    const { isEnable } = params;
    let conditions = {};
    if (isEnable) conditions = { ...conditions, isEnable: true };

    return this.prisma.order.findMany({
      where: conditions,
    });
  }

  createOrder(order: OrderDTO) {
    return this.prisma.order.create({
      data: order,
    });
  }


  updateOrder(orderId: number, order: OrderDTO) {
    return this.prisma.order.update({
      data: order,
      where: { id: orderId }
    });
  }
}
