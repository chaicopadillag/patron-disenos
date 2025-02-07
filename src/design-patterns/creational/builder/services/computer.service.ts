import { COLORS } from '../../../../libs/colors.ts';
import { ComputerBuilder } from '../builders/computer.builder.ts';

export class ComputerService {
  static getComputerBasic() {
    const computer = new ComputerBuilder().setRam('8GB').setCpu('i7').setGpu('GTX 1060').setStorage('1TB').setOs('Windows 10').build();
    console.log('%cBasic Computer:', COLORS.orange);
    computer.displayComputerInfo();
  }

  static getAdvancedComputer() {
    const computer = new ComputerBuilder().setRam('16GB').setCpu('i9').setGpu('RTX 2080').setStorage('2TB').setOs('Windows 11').build();
    console.log('%cAdvance Computer:', COLORS.blue);
    computer.displayComputerInfo();
  }

  static getDeveloperComputer() {
    const computer = new ComputerBuilder().setRam('32GB').setCpu('i9').setGpu('RTX 3080').setStorage('4TB').setOs('Manjaro OS').build();
    console.log('%cDeveloper Computer:', COLORS.green);
    computer.displayComputerInfo();
  }
}
