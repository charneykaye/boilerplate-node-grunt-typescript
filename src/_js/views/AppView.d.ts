class AppView extends Backbone.View {
    public events: {
        keypress #new-todo: string;
        keyup #new-todo: string;
        click .todo-clear a: string;
        click .mark-all-done: string;
    };
    public input: any;
    public allCheckbox: HTMLInputElement;
    public statsTemplate: (params: any) => string;
    constructor();
    public render(): void;
    public addOne(todo): void;
    public addAll(): void;
    public newAttributes(): {
        content: any;
        order: any;
        done: bool;
    };
    public createOnEnter(e): void;
    public clearCompleted(): bool;
    public tooltipTimeout: number;
    public showTooltip(e): void;
    public toggleAllComplete(): void;
}
