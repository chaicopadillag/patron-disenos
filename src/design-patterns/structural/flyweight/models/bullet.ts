import { COLORS } from '../../../../libs/colors.ts';
import { BulletType } from '../flyweights/bullet-type.ts';

export class Bullet {
  private x: number;
  private y: number;
  private direction: number;
  private bulletType: BulletType;

  constructor(x: number, y: number, direction: number, bulletType: BulletType) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.bulletType = bulletType;
  }

  display(): void {
    const text = `
      Bala del tipo: %c"${this.bulletType.getName()}" 
      %cCoords: (${this.x}, ${this.y})
      Dirección ${this.direction}
      Daño: ${this.bulletType.getDamage()} 
      Color: ${this.bulletType.getColor()}
    `;

    console.log(text, COLORS.green, COLORS.white);
  }
}
