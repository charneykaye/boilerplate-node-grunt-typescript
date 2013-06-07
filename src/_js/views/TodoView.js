var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TodoView = (function (_super) {
    __extends(TodoView, _super);
    function TodoView(options) {
        this.tagName = "li";
        this.events = {
            "click .check": "toggleDone",
            "dblclick label.todo-content": "edit",
            "click span.todo-destroy": "clear",
            "keypress .todo-input": "updateOnEnter",
            "blur .todo-input": "close"
        };
        _super.call(this, options);
        this.template = _.template($('#item-template').html());
        _.bindAll(this, 'render', 'close', 'remove');
        this.model.bind('change', this.render);
        this.model.bind('destroy', this.remove);
    }
    TodoView.prototype.render = function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.input = this.$('.todo-input');
        return this;
    };
    TodoView.prototype.toggleDone = function () {
        this.model.toggle();
    };
    TodoView.prototype.edit = function () {
        this.$el.addClass("editing");
        this.input.focus();
    };
    TodoView.prototype.close = function () {
        this.model.save({
            content: this.input.val()
        });
        this.$el.removeClass("editing");
    };
    TodoView.prototype.updateOnEnter = function (e) {
        if(e.keyCode == 13) {
            close();
        }
    };
    TodoView.prototype.clear = function () {
        this.model.clear();
    };
    return TodoView;
})(Backbone.View);
//@ sourceMappingURL=file:///C:/development/typescript-demo/src/_js/views/TodoView.js.map
