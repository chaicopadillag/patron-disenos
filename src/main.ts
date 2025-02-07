import { mainAbstractFactory } from './design-patterns/creational/abstract-factory/index.ts';
import { MainBuilder } from './design-patterns/creational/builder/index.ts';
import { mainFactoryFunction } from './design-patterns/creational/factory-function/index.ts';
import { mainFactory } from './design-patterns/creational/factory-method/index.ts';
import { mainImmutableWithCopy } from './design-patterns/creational/immutability-with-copy/index.ts';
import { mainPrototype } from './design-patterns/creational/prototype/index.ts';
import { mainSigleton } from './design-patterns/creational/singleton/index.ts';
import { mainAdapter } from './design-patterns/structural/adapter/index.ts';

const main = () => {
  console.log('===== Creational Patterns =====');
  console.log('🔶 Pattern Builder::::: ✳️');
  MainBuilder.run();
  console.log('🔶 Pattern Factory Method::::: ✳️');
  mainFactory();
  console.log('🔶 Pattern Abstract Factory::::: ✳️');
  mainAbstractFactory();
  console.log('🔶 Pattern Prototype::::: ✳️');
  mainPrototype();
  console.log('🔶 Immutability with Copy::::: ✳️');
  mainImmutableWithCopy();
  console.log('🔶 Singleton::::: ✳️');
  mainSigleton();
  console.log('🔶 Factory Function::::: ✳️');
  mainFactoryFunction();
  console.log('===== Structural Patterns =====');
  console.log('🔶 Pattern Adapter::::: ✳️');
  mainAdapter();
};

main();
