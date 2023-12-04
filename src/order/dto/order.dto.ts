import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsNotEmpty,
} from "class-validator"

export class OrderDTO {
  no

  @IsNotEmpty()
  tableName

  customerName
  
  status

  memo

  discountId
}

// export class ProductUpdate {
//   isEnable?: boolean
//   name?: string
//   type?: number
//   image?: string
//   execTime?: number
//   status?: number
//   price?: number
//   description?: string
// }

