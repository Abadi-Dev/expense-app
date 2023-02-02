import { Injectable } from '@nestjs/common';
import { ReportType, data, Report, UpdateReport } from './data';
import { v4 as uuid } from 'uuid';
import { ReportResponseDto } from './dtos/report.dto';
@Injectable()
export class AppService {
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDto(report));
  }
  getReportById(type: ReportType, id: string): ReportResponseDto {
    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    return new ReportResponseDto(report);
  }
  createReport(type: ReportType, body: UpdateReport): ReportResponseDto {
    const newReport: Report = {
      id: uuid(),
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.report.push(newReport);
    return new ReportResponseDto(newReport);
  }
  updateReport(
    type: ReportType,
    id: string,
    body: { source: string; amount: number },
  ): ReportResponseDto {
    const updateReport = data.report.findIndex((report) => report.id === id);
    if (!data.report[updateReport]) return;
    data.report[updateReport] = {
      ...data.report[updateReport],
      ...body,
      updated_at: new Date(),
    };
    return new ReportResponseDto(data.report[updateReport]);
  }
  deleteReport(id: string) {
    const deleteReport = data.report.findIndex((report) => report.id === id);
    if (!data.report[deleteReport]) return 'report not found!';
    console.log(deleteReport);
    data.report.splice(0, 1);
    return 'report Deleted!';
  }
}
