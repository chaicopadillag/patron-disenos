import { ComputerService } from './services/computer.service.ts';
import { QueryService } from './services/query.service.ts';

export class MainBuilder {
  public static run(): void {
    // ComputerService.getComputerBasic();
    // ComputerService.getAdvancedComputer();
    ComputerService.getDeveloperComputer();
    QueryService.execute();
  }
}
