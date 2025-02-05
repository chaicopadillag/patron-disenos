import { COLORS } from '../../../libs/colors.ts';
import { ReportI } from '../interfaces/report.interface.ts';

export class SalesReport implements ReportI {
  generate(): void {
    console.log('%cGenerating Sales Report...', COLORS.pink);
  }
}
