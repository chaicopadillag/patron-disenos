import { DecoratorService } from './services/decorator.service.ts';

export const mainDecorator = () => {
  DecoratorService.run();
};
