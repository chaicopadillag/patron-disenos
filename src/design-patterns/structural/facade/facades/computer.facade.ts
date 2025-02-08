import { COLORS } from '../../../../libs/colors.ts';
import { CPU } from '../subsystems/cpu.ts';
import { HardDrive } from '../subsystems/hard-drive.ts';
import { Memory } from '../subsystems/memory.ts';

export class ComputerFacade {
  constructor(protected cpu: CPU, protected memory: Memory, protected hardDrive: HardDrive) {}

  startComputer(): void {
    console.log('\n%cIniciando la computadora...', COLORS.cyan);
    this.memory.load(0, this.hardDrive.read(0, 1024));
    this.cpu.jump(0);
    this.cpu.execute();
    console.log('Computadora lista para usar.\n');
  }

  shutDownComputer(): void {
    console.log('\n%cApagando la computadora...', COLORS.red);
    console.log('Cerrando procesos y guardando datos...');
    this.cpu.stopOperations();
    this.memory.free();
    this.hardDrive.close();

    console.log('Computadora apagada.\n');
  }
}
