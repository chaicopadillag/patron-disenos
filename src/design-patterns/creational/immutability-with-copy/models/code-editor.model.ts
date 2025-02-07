import { CodeEditorStateI } from '../interfaces/code-editor.interface.ts';

export class CodeEditor implements CodeEditorStateI {
  constructor(public readonly content: string, public readonly cursorPosition: number, public readonly unSavedChanges: boolean) {}

  copyWith({ content, cursorPosition, unSavedChanges }: Partial<CodeEditor>): CodeEditor {
    return new CodeEditor(content ?? this.content, cursorPosition ?? this.cursorPosition, unSavedChanges ?? this.unSavedChanges);
  }

  displayState() {
    console.log(`
        Content: ${this.content},
        Cursor Position: ${this.cursorPosition},
        Unsaved Changes: ${this.unSavedChanges}`);
  }
}
