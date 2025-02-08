import { COLORS } from '../../../../libs/colors.ts';
import { BulletType } from '../flyweights/bullet-type.ts';

export class BulletTypeFactory {
  private bulletTypes: Map<string, BulletType> = new Map();

  getBulletType(name: string, damage: number, color: string): BulletType {
    const key = `${name}-${damage}-${color}`;
    if (!this.bulletTypes.has(key)) {
      console.log(`%cCreating new bullet type: ${key}`, COLORS.red);
      this.bulletTypes.set(key, new BulletType(name, damage, color));
    }
    return this.bulletTypes.get(key)!;
  }
}
