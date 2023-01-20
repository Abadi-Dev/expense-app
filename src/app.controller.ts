import { Controller, Get } from '@nestjs/common';

@Controller('/report/:typeOfReport')
export class AppController {
  @Get()
  getAllIncomeReports(): any[] {
    return [];
  }
  @Get(':id')
  getReportById(): object {
    return {};
  }
}
