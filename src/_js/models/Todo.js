var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Todo = (function (_super) {
    __extends(Todo, _super);
    function Todo() {
        _super.apply(this, arguments);

    }
    Todo.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    Todo.prototype.initialize = function () {
        if(!this.get("content")) {
            this.set({
                "content": this.defaults().content
            });
        }
    };
    Todo.prototype.toggle = function () {
        this.save({
            done: !this.get("done")
        });
    };
    Todo.prototype.clear = function () {
        this.destroy();
    };
    return Todo;
})(Backbone.Model);
//@ sourceMappingURL=file:///C:/development/typescript-demo/src/_js/models/Todo.js.map
