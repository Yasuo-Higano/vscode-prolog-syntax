import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration('prolog');
  if (config.get('associatePl')) {
    const filesConfig = vscode.workspace.getConfiguration('files');
    const associations = filesConfig.get<{ [key: string]: string }>('associations') || {};
    if (associations['*.pl'] !== 'prolog') {
      associations['*.pl'] = 'prolog';
      filesConfig.update('associations', associations, vscode.ConfigurationTarget.Workspace);
    }
  }
}

export function deactivate() {}
