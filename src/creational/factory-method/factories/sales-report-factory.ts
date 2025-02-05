import { ReportI } from '../interfaces/report.interface.ts';
import { SalesReport } from '../products/sales-report.ts';
import { ReportFactory } from './report.factory.ts';

export class SalesReportFactory extends ReportFactory {
  createReport(): ReportI {
    return new SalesReport();
  }
}
