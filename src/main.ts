import { mainAbstractFactory } from './creational/abstract-factory/index.ts';
import { MainBuilder } from './creational/builder/index.ts';
import { mainFactory } from './creational/factory-method/index.ts';

const main = () => {
  console.log('🔶 Pattern Builder::::: ✳️');
  MainBuilder.run();
  console.log('🔶 Pattern Factory Method::::: ✳️');
  mainFactory();
  console.log('🔶 Pattern Abstract Factory::::: ✳️');
  mainAbstractFactory();
};

main();
