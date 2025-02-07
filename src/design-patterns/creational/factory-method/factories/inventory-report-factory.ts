import { InventoryReport } from '../products/inventory-report.ts';
import { ReportFactory } from './report.factory.ts';

export class InventoryReportFactory extends ReportFactory {
  createReport() {
    return new InventoryReport();
  }
}
