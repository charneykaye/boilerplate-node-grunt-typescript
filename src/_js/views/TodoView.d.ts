class TodoView extends Backbone.View {
    public template: (data: any) => string;
    public model: Todo;
    public input: any;
    constructor(options?);
    public render(): TodoView;
    public toggleDone(): void;
    public edit(): void;
    public close(): void;
    public updateOnEnter(e): void;
    public clear(): void;
}
