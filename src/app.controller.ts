import { Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';

@Controller('/report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string): any[] {
    console.log(type);
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
