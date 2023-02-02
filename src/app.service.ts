import { Injectable } from '@nestjs/common';
import { ReportType, data, Report, UpdateReport } from './data';
import { v4 as uuid } from 'uuid';
@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    return data.report.filter((report) => report.type === type);
  }
  getReportById(type: ReportType, id: string) {
    return data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
  }
  createReport(type: ReportType, body: UpdateReport) {
    const newReport: Report = {
      id: uuid(),
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.report.push(newReport);
    return newReport;
  }
  updateReport(
    type: ReportType,
    id: string,
    body: { source: string; amount: number },
  ) {
    const updateReport = data.report.findIndex((report) => report.id === id);
    if (!data.report[updateReport]) return 'report not found!';
    data.report[updateReport] = {
      ...data.report[updateReport],
      ...body,
      updated_at: new Date(),
    };
    return data.report[updateReport];
  }
  deleteReport(id: string) {
    const deleteReport = data.report.findIndex((report) => report.id === id);
    if (!data.report[deleteReport]) return 'report not found!';
    console.log(deleteReport);
    data.report.splice(0, 1);
    return 'report Deleted!';
  }
}
