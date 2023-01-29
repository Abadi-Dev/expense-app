import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { ReportType, data, Report } from './data';
import { v4 as uuid } from 'uuid';

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
  createReport(
    @Body() { amount, source }: { amount: number; source: string },
    @Param('type') type: string,
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const newReport: Report = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: reportType,
    };
    data.report.push(newReport);
    return newReport;
  }
  @Put(':id')
  putReportById(
    @Param('id') id: string,
    @Param('type') type: string,
    @Body() body: { amount: number; source: string },
  ) {
    type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const updateReport = data.report.findIndex((report) => report.id === id);
    console.log(updateReport);
    if (!data.report[updateReport]) return 'report not found!';
    data.report[updateReport] = {
      ...data.report[updateReport],
      ...body,
    };
    return data.report[updateReport];
  }
  @HttpCode(204)
  @Delete(':id')
  deleteReportById(@Param('id') id: string): string {
    const deleteReport = data.report.findIndex((report) => report.id === id);
    if (!data.report[deleteReport]) return 'report not found!';
    data.report.slice(deleteReport, 1);
    return 'report Deleted!';
  }
}
