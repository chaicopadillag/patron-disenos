import { ReportI } from '../interfaces/report.interface.ts';

export abstract class ReportFactory {
  protected abstract createReport(): ReportI;

  generateReport(): void {
    const report = this.createReport();
    report.generate();
  }
}
