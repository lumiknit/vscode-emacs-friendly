import {Editor} from './editor';

export class Operation {
    private editor: Editor;
    private commandList: { [key: string]: (...args: any[]) => any, thisArgs?: any } = {};

    constructor() {
        this.editor = new Editor();
        this.commandList = {
            'C-k': () => {
                this.editor.kill();
            },
            'C-d': () => {
                this.editor.deleteRight();
            },
            'backspace': () => {
                this.editor.delete();
            },
            'C-w': () => {
                this.editor.cut()
            },
            'M-w': () => {
                this.editor.copy()
            },
            'C-y': () => {
                this.editor.yank()
            },
            "C-x_C-o": () => {
                this.editor.deleteBlankLines();
            },
            "C-x_u": () => {
                this.editor.undo();
                this.editor.setStatusBarMessage("Undo!");
            },
            "C-/": () => {
                this.editor.undo();
                this.editor.setStatusBarMessage("Undo!");
            },
            'C-j': () => {
                this.editor.breakLine();
            },
            'C-g': () => {
                this.editor.setStatusBarMessage("Quit");
            },
            "C-S_bs": () => {
                this.editor.deleteLine();
            },
            'C-l': () => {
                this.editor.scrollLineToCenterTopBottom()
            }
        };
    }

    getCommand(commandName: string): (...args: any[]) => any {
        return this.commandList[commandName];
    }
}
