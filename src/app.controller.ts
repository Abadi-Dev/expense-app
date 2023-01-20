import { Controller, Get } from '@nestjs/common';

@Controller('/income/report')
export class AppController {
  @Get()
  getAllIncomeReports(): any[] {
    return [];
  }
}
