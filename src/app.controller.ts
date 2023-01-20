import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/report/:typeOfReport')
export class AppController {
  @Get()
  getAllReports(): any[] {
    return [];
  }
  @Post()
  createReport(): string {
    return 'created!';
  }
  @Get(':id')
  getReportById(): string {
    return 'here is your report!';
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
