import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { ReportType, data } from './data';

@Controller('/report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string): any[] {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }
  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    console.log(id, type);
    const reportType: string =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }
  @Post()
  createReport(@Body() body: { amount: number; source: string }) {
    return 'created!';
  }
  @Put(':id')
  putReportById(): string {
    return 'report Updated';
  }
  @Delete(':id')
  deleteReportById(): string {
    return 'report Deleted';
  }
}
