/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

import { saludarIntl } from './factories/internacional.factory.ts';
import { loggerFactory } from './factories/logger.factory.ts';

export const mainFactoryFunction = () => {
  const saludarIntlEs = saludarIntl('es');
  const saludarIntlEn = saludarIntl('en');
  const saludarIntlFr = saludarIntl('fr');
  saludarIntlEs('Juan');
  saludarIntlEn('John');
  saludarIntlFr('Jean');

  console.log('-------------------');

  const loggerInfo = loggerFactory('info');
  const loggerWarn = loggerFactory('warn');
  const loggerError = loggerFactory('error');
  loggerInfo('Mensaje de información');
  loggerWarn('Mensaje de advertencia');
  loggerError('Mensaje de error');
};
