import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DiscountDTO } from './dto';
import { handleResponse } from 'src/helpers';

@Injectable({})
export class DiscountService {
  constructor(private prisma: PrismaService) {}

  async getDiscount(discountId: string) {
  const discount = await this.prisma.discount.findFirst({
      where: {
        id: +discountId,
      },
    });
  
    return {
      errorStatus: !discount ?  HttpStatus.NOT_FOUND : null, 
      discount: discount,
    }
  }

  getDiscounts(params: any) {
    const {  date } = params;
    let conditions = {};

    if (date) {
      conditions = {
        ...conditions,
        startDate: { lte: new Date(date) },
        endDate: { gte: new Date(date) },
      };
    }

    return this.prisma.discount.findMany({
      where: conditions
    });
  }

  async createDiscount(discount: DiscountDTO) {
    const { type, value } = discount
    if(type == 2 && value > 100) {
      return {
        errorStatus: HttpStatus.BAD_REQUEST,
      }
    }  

    await this.prisma.discount.create({
      data: {
        ...discount,
        startDate: new Date(discount.startDate),
        endDate: new Date(discount.endDate),
      },
    });

    return {}
  }

  updateDiscount(discountId: number, discount: DiscountDTO) {
    return this.prisma.discount.update({
      data: discount,
      where: { id: discountId },
    });
  }
}
