import { CommandI } from '../interfaces/command.interface.ts';
import { TextEditor } from '../receivers/text-editor.ts';

export class UndoCommand implements CommandI {
  constructor(private editor: TextEditor) {}

  execute(): void {
    this.editor.undo();
  }
}
