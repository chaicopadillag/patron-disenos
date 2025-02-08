import { COLORS } from '../../../../libs/colors.ts';
import { BulletType } from '../flyweights/bullet-type.ts';

export class BulletTypeFactory {
  private bulletTypes: Map<string, BulletType> = new Map();

  getBulletType(name: string, damage: number, color: string): BulletType {
    if (!this.bulletTypes.has(name + '-' + damage + '-' + color)) {
      console.log(`%cCreating new bullet type: ${name}-${damage}-${color}`, COLORS.red);
      this.bulletTypes.set(name + '-' + damage + '-' + color, new BulletType(name, damage, color));
    }
    return this.bulletTypes.get(name + '-' + damage + '-' + color)!;
  }
}
