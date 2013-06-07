// Todo Model
// ----------

// Our basic **Todo** model has `content`, `order`, and `done` attributes.
class Todo extends Backbone.Model {

    // Default attributes for the todo.
    defaults() {
        return {
            content: "empty todo...",
            done: false
        }
    };

    // Ensure that each todo created has `content`.
    initialize() {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    }

    // Toggle the `done` state of this todo item.
    toggle() {
        this.save({ done: !this.get("done") });
    }

    // Remove this Todo from *localStorage* and delete its view.
    clear() {
        this.destroy();
    }

}