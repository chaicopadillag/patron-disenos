import { COLORS } from '../../libs/colors.ts';
import { CodeEditor } from './models/code-editor.model.ts';
import { CodeEditorHistory } from './services/code-editor-history.service.ts';
import { GameService } from './services/game.service.ts';

/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */
/**
 1.	Completen el método copyWith en la clase Player para que permita 
 crear una copia con cambios en name, score o level.
 
 2.	Usen el código cliente para probar el funcionamiento de copyWith, 
 haciendo cambios en el puntaje, nivel y nombre del jugador.
 */

export const mainImmutableWithCopy = () => {
  const history = new CodeEditorHistory();
  const codeEditor = new CodeEditor('const a = 1;', 0, false);

  console.log('\nInitial State %cEditor State:', COLORS.yellow);
  history.save(codeEditor);
  codeEditor.displayState();

  console.log('\n%cFrist Change State:', COLORS.blue);
  const newCodeEditor = codeEditor.copyWith({ content: 'const a = 2;', cursorPosition: 2, unSavedChanges: true });
  history.save(newCodeEditor);
  newCodeEditor.displayState();

  console.log('\n%cSecond Change State:', COLORS.blue);
  const newCodeEditor2 = newCodeEditor.copyWith({ content: 'const b = 3;', cursorPosition: 3, unSavedChanges: true });
  history.save(newCodeEditor2);
  newCodeEditor2.displayState();

  console.log('\n%cThird Change State:', COLORS.blue);
  const newCodeEditor3 = newCodeEditor2.copyWith({ content: 'const c = 4;', cursorPosition: 4, unSavedChanges: true });
  history.save(newCodeEditor3);
  newCodeEditor3.displayState();

  console.log('\n%cDespues de Undo:', COLORS.red);
  const undoCodeEditor = history.undo();
  undoCodeEditor.displayState();

  console.log('\n%cDespues Redo:', COLORS.red);
  const redoCodeEditor = history.redo();
  redoCodeEditor.displayState();

  console.log('\n%cPlayer Immutability:', COLORS.orange);
  GameService.startPlay();
};
