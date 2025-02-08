import { InventoryReportFactory } from '../factories/inventory-report-factory.ts';
import { ReportFactory } from '../factories/report.factory.ts';
import { SalesReportFactory } from '../factories/sales-report-factory.ts';

export class ReportService {
  reportFactory: ReportFactory;

  generateReport() {
    const reportType = prompt('¿Qué tipo de reporte deseas? (sales/inventory) default is sales');

    if (reportType === 'inventory') {
      this.reportFactory = new InventoryReportFactory();
    } else {
      this.reportFactory = new SalesReportFactory();
    }
    this.reportFactory.generateReport();
  }
}
