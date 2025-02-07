export interface CodeEditorStateI {
  readonly content: string;
  readonly cursorPosition: number;
  readonly unSavedChanges: boolean;

  copyWith: (params: Partial<CodeEditorStateI>) => CodeEditorStateI;
  displayState: () => void;
}
