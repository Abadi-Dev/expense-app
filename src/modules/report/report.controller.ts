import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { ReportType } from 'src/data';

import {
  CreateReportDto,
  ReportResponseDto,
  UpdateReport,
} from 'src/dtos/report.dto';
import { ReportService } from './report.service';

@Controller('/report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto[] {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getAllReports(reportType);
  }
  @Get(':id')
  getReportById(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ) {
    const reportType: ReportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getReportById(reportType, id);
  }
  @Post()
  createReport(
    @Body() body: CreateReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.createReport(reportType, body);
  }
  @Put(':id')
  updateReport(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Body() body: UpdateReport,
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.updateReport(reportType, id, body);
  }
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string): string {
    return this.reportService.deleteReport(id);
  }
}
