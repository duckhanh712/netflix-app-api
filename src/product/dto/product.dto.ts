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
} from "class-validator"

export class ProductDTO {
  isEnable: boolean
  name: string

  @IsInt()
  type: number
  image: string

  @IsInt()
  execTime: number
  
  @IsInt()
  status: number
  
  @IsInt()
  price: number
  description: string
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

