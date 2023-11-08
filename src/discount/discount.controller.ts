import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Response,
} from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DiscountDTO } from './dto';

@Controller('discounts')
export class DiscountController {
  constructor(private DiscountService: DiscountService) {}

  @Get(':discountId')
  async getDiscount(@Param('discountId') discountId: string, @Response() res) {
    const { discount, errorStatus } = await this.DiscountService.getDiscount(
      discountId,
    );

    if (errorStatus) return res.status(errorStatus).send();

    return res.status.send(discount);
  }
  @Get('')
  async getDiscounts(@Query() params: any, @Response() res) {
    const discounts = await this.DiscountService.getDiscounts(params);

    return res.send(discounts);
  }

  @Post('')
  async createDiscount(@Body() discountData: DiscountDTO, @Response() res) {
    const { errorStatus,  } = await this.DiscountService.createDiscount(
      discountData,
    );

    if (errorStatus) return res.status(errorStatus).send();

    return res.status(HttpStatus.OK).send();
  }
}
