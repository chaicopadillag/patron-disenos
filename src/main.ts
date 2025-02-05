import { MainBuilder } from './creational/builder/index.ts';
import { mainFactory } from './creational/factory-method/index.ts';

const main = () => {
  MainBuilder.run();
  mainFactory();
};

main();
