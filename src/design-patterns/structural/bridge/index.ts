import { Mage } from './characters/mage.character.ts';
import { Warrior } from './characters/warrior.character.ts';
import { MagicSpell } from './skills/magic-spell.ts';
import { SwordAttack } from './skills/sword-attack.ts';
import { AxeAttack } from './skills/axe-attack.ts';

export const mainBrigde = () => {
  const warrior = new Warrior(new SwordAttack());
  warrior.performAbility();
  warrior.setAvility(new AxeAttack());
  warrior.performAbility();

  const mage = new Mage(new MagicSpell());
  mage.performAbility();
};
