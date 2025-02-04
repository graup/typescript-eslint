import type Monaco from 'monaco-editor';
import type { ConfigModel, SelectedRange } from '../types';
import type { TSESTree } from '@typescript-eslint/website-eslint';
import type { SourceFile } from 'typescript';

export interface CommonEditorProps extends ConfigModel {
  readonly darkTheme: boolean;
  readonly decoration: SelectedRange | null;
  readonly onChange: (value: string) => void;
  readonly onTsASTChange: (value: string | SourceFile) => void;
  readonly onEsASTChange: (value: string | TSESTree.Program) => void;
  readonly onScopeChange: (value: string | Record<string, unknown>) => void;
  readonly onSelect: (position: Monaco.Position | null) => void;
}
