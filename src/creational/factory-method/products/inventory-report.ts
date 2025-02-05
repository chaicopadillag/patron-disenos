import { COLORS } from '../../../libs/colors.ts';
import { ReportI } from '../interfaces/report.interface.ts';

export class InventoryReport implements ReportI {
  generate(): void {
    console.log('%cGenerating Inventory Report...', COLORS.cyan);
  }
}
