import { BulletTypeFactory } from '../factories/bullet-type.factory.ts';
import { Bullet } from '../models/bullet.ts';

export class ShootingSystemService {
  private bullets: Bullet[] = [];
  private factory: BulletTypeFactory;

  constructor(factory: BulletTypeFactory) {
    this.factory = factory;
  }

  shoot(x: number, y: number, direction: number, type: string, damage: number, color: string): void {
    const bulletType = this.factory.getBulletType(type, damage, color);
    const bullet = new Bullet(x, y, direction, bulletType);
    this.bullets.push(bullet);
    bullet.display();
  }

  getBulletCount(): number {
    return this.bullets.length;
  }
}
