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
  IsString,
  IsDateString,
  Matches
} from "class-validator"

export class DiscountDTO {
  @IsString()
  name: string

  @IsInt()
  status: number

  @IsString()
  description: string

  @IsDateString()
  startDate: Date

  @IsDateString()
  endDate: Date

  @IsInt()
  value

  @IsInt()
  type
}

// use:   @IsCustomRegexMatch(/^\d{10}$/, 'Phone number must contain 10 digits.')

