import { CodeEditor } from '../models/code-editor.model.ts';

export class CodeEditorHistory {
  private history: CodeEditor[] = [];
  private currentIndex = -1;

  public save(codeEditor: CodeEditor): void {
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1);
    }

    this.history.push(codeEditor);
    this.currentIndex++;
  }

  public undo(): CodeEditor {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.history[this.currentIndex];
    }
    return this.history[0];
  }

  public redo(): CodeEditor {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    }
    return this.history[this.history.length - 1];
  }
}
