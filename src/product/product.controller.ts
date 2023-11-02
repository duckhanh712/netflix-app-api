import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Response,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './dto';

@Controller('products')
export class ProductController {
  constructor(private ProductService: ProductService) {}

  @Get(':productId')
  async getProduct(@Param('productId') productId: string, @Response() res) {
    const user = await this.ProductService.getProduct(productId);

    return res.send(user);
  }
  @Get('')
  async getProducts(@Query('isEnable') isEnable: boolean, @Response() res) {
    const user = await this.ProductService.getProducts({ isEnable });

    return res.send(user);
  }

  @Post('')
  async createProduct(@Body() productData: ProductDTO, @Response() res) {
    const product = await this.ProductService.createProduct(productData);

    return res.send(product);
  }
}
