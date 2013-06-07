class TodoList extends Backbone.Collection {
    public model: new(attr?: any, opts?: any) => Todo;
    public localStorage;
    public done(): any[];
    public remaining();
    public nextOrder();
    public comparator(todo: Todo);
}
