var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AppView = (function (_super) {
    __extends(AppView, _super);
    function AppView() {
        _super.call(this);
        this.events = {
            "keypress #new-todo": "createOnEnter",
            "keyup #new-todo": "showTooltip",
            "click .todo-clear a": "clearCompleted",
            "click .mark-all-done": "toggleAllComplete"
        };
        this.tooltipTimeout = null;
        this.setElement($("#todoapp"), true);
        _.bindAll(this, 'addOne', 'addAll', 'render', 'toggleAllComplete');
        this.input = this.$("#new-todo");
        this.allCheckbox = this.$(".mark-all-done")[0];
        this.statsTemplate = _.template($('#stats-template').html());
        Todos.bind('add', this.addOne);
        Todos.bind('reset', this.addAll);
        Todos.bind('all', this.render);
        Todos.fetch();
    }
    AppView.prototype.render = function () {
        var done = Todos.done().length;
        var remaining = Todos.remaining().length;
        this.$('#todo-stats').html(this.statsTemplate({
            total: Todos.length,
            done: done,
            remaining: remaining
        }));
        this.allCheckbox.checked = !remaining;
    };
    AppView.prototype.addOne = function (todo) {
        var view = new TodoView({
            model: todo
        });
        this.$("#todo-list").append(view.render().el);
    };
    AppView.prototype.addAll = function () {
        Todos.each(this.addOne);
    };
    AppView.prototype.newAttributes = function () {
        return {
            content: this.input.val(),
            order: Todos.nextOrder(),
            done: false
        };
    };
    AppView.prototype.createOnEnter = function (e) {
        if(e.keyCode != 13) {
            return;
        }
        Todos.create(this.newAttributes());
        this.input.val('');
    };
    AppView.prototype.clearCompleted = function () {
        _.each(Todos.done(), function (todo) {
            return todo.clear();
        });
        return false;
    };
    AppView.prototype.showTooltip = function (e) {
        var tooltip = $(".ui-tooltip-top");
        var val = this.input.val();
        tooltip.fadeOut();
        if(this.tooltipTimeout) {
            clearTimeout(this.tooltipTimeout);
        }
        if(val == '' || val == this.input.attr('placeholder')) {
            return;
        }
        this.tooltipTimeout = _.delay(function () {
            return tooltip.show().fadeIn();
        }, 1000);
    };
    AppView.prototype.toggleAllComplete = function () {
        var done = this.allCheckbox.checked;
        Todos.each(function (todo) {
            return todo.save({
                'done': done
            });
        });
    };
    return AppView;
})(Backbone.View);
//@ sourceMappingURL=file:///C:/development/typescript-demo/src/_js/views/AppView.js.map
