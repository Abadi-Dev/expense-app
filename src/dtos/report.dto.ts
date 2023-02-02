import {
  IsPositive,
  IsNumber,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';
import { ReportType } from 'src/data';
import { Exclude } from 'class-transformer';

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

export class ReportResponseDto {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  @Exclude()
  updated_at: Date;
  type: ReportType;

  constructor(partial: Partial<ReportResponseDto>) {
    Object.assign(this, partial);
  }
}
