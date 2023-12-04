import {
  validate,
  IsInt,
  IsString,
  IsNotEmpty,
  IsNumber
} from "class-validator"

export class OrderItemDTO {
  @IsNotEmpty()
  @IsInt()
  relatedId

  @IsNotEmpty()
  @IsInt()
  orderId

  status

  @IsNotEmpty()
  @IsInt()
  type

  @IsNotEmpty()
  @IsString()
  name

  @IsString()
  image

  @IsNotEmpty()
  @IsNumber()
  price

  @IsNotEmpty()
  @IsNumber()
  count

  @IsNotEmpty()
  @IsString()
  unit

  @IsNotEmpty()
  @IsString()
  memo
}

