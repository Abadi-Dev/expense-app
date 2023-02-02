import {
  IsPositive,
  IsNumber,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';

export class CreateReportDto {
  @IsPositive()
  @IsNumber()
  amount: number;
  @IsNotEmpty()
  @IsString()
  source: string;
}

export class UpdateReport {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  amount: number;
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  source: string;
}
