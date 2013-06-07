var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TodoList = (function (_super) {
    __extends(TodoList, _super);
    function TodoList() {
        _super.apply(this, arguments);

        this.model = Todo;
        this.localStorage = new Store("todos-backbone");
    }
    TodoList.prototype.done = function () {
        return this.filter(function (todo) {
            return todo.get('done');
        });
    };
    TodoList.prototype.remaining = function () {
        return this.without.apply(this, this.done());
    };
    TodoList.prototype.nextOrder = function () {
        if(!length) {
            return 1;
        }
        return this.last().get('order') + 1;
    };
    TodoList.prototype.comparator = function (todo) {
        return todo.get('order');
    };
    return TodoList;
})(Backbone.Collection);
//@ sourceMappingURL=file:///C:/development/typescript-demo/src/_js/collections/TodoList.js.map
