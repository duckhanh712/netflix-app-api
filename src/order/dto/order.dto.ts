import { IsNotEmpty } from 'class-validator';

export class OrderDTO {
  @IsNotEmpty()
  no: number;

  @IsNotEmpty()
  tableName: string;

  customerName: string;

  @IsNotEmpty()
  status: number;

  memo: string;
}
