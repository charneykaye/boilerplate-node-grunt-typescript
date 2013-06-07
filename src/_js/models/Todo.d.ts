class Todo extends Backbone.Model {
    public defaults(): {
        content: string;
        done: bool;
    };
    public initialize(): void;
    public toggle(): void;
    public clear(): void;
}
