import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDTO } from './dto';

@Injectable({}) //this is "Dependency Injection"
export class ProductService {
  constructor(private prisma: PrismaService) {}

  getProduct(productId: string) {
    return this.prisma.product.findFirst({
      where: {
        id: +productId,
      },
    });
  }

  getProducts(params: any) {
    const { isEnable } = params;
    let conditions = {};
    if (isEnable) conditions = { ...conditions, isEnable: true };

    return this.prisma.product.findMany({
      where: conditions,
    });
  }

  createProduct(product: ProductDTO) {
    return this.prisma.product.create({
      data: product,
    });
  }


  updateProduct(productId: number, product: ProductDTO) {
    return this.prisma.product.update({
      data: product,
      where: { id: productId }
    });
  }
}
