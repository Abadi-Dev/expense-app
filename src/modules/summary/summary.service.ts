import { Injectable } from '@nestjs/common';
import { ReportService } from '../report/report.service';
import { ReportType } from 'src/data';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}
  getSummary() {
    const totalExpenses = this.summReports(ReportType.EXPENSE);
    const totalIncome = this.summReports(ReportType.INCOME);
    return {
      totalExpenses,
      totalIncome,
      'Net Income': totalIncome - totalExpenses,
    };
  }
  summReports(reportType: ReportType): number {
    const total = this.reportService
      .getAllReports(reportType)
      .reduce((sum: number, report) => {
        return sum + report.amount;
      }, 0);
    return total;
  }
}
