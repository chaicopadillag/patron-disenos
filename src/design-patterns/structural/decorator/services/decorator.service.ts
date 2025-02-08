import { BasicCharacter } from '../components/basic-character.component.ts';
import { BasicNotification } from '../components/basic-notification.component.ts';
import { EmailDecorator } from '../decorators/email.decorator.ts';
import { HelmetDecorator } from '../decorators/helmet.decorator.ts';
import { RingDecorator } from '../decorators/ring.decorator.ts';
import { ShieldDecorator } from '../decorators/shield.decorator.ts';
import { SMSDecorator } from '../decorators/sms.decorator.ts';
import { SwordDecorator } from '../decorators/sword.decorator.ts';
import { CharacterI } from '../interfaces/character.interface.ts';

export class DecoratorService {
  public static run(): void {
    this.sendNotification();
    console.log('\n---------------------------------\n');
    this.createCharacter();
  }

  static sendNotification() {
    const basicNotification = new BasicNotification();
    basicNotification.send('Hello world!');

    const emailNotification = new EmailDecorator(basicNotification);
    emailNotification.send('Alerta de seguridad');

    const smsNotification = new SMSDecorator(emailNotification);
    smsNotification.send('Tu cuenta ha sido bloqueada');
  }

  static createCharacter() {
    // Crear un personaje básico
    let character: CharacterI = new BasicCharacter();
    console.log('\nPersonaje inicial:', character.getDescription());
    console.log('Estadísticas:', character.getStats());

    // Añadir un casco al personaje
    character = new HelmetDecorator(character);
    console.log('\nCon Casco:', character.getDescription());
    console.log('Estadísticas:', character.getStats());

    // Añadir un escudo al personaje
    character = new ShieldDecorator(character);
    console.log('\nCon Escudo:', character.getDescription());
    console.log('Estadísticas:', character.getStats());

    // Añadir una espada al personaje
    character = new SwordDecorator(character);
    console.log('\nCon Espada:', character.getDescription());
    console.log('Estadísticas:', character.getStats());

    character = new RingDecorator(character);
    console.log('\nCon Anillo:', character.getDescription());
    console.log('Estadísticas:', character.getStats());
  }
}
