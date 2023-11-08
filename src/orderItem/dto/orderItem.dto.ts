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

  @IsNotEmpty()
  @IsInt()
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
  @IsNumber()
  unit

  @IsNotEmpty()
  @IsString()
  memo
}

