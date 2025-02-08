export class HardDrive {
  read(position: number, size: number): string {
    console.log(`HardDrive: Leyendo ${size} bytes desde la posición ${position}.`);
    return '001010001010100';
  }

  close() {
    console.log('HardDrive: Deteniendo disco duro.');
  }
}
