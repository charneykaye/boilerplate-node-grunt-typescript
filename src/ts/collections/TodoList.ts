// Todo Collection
// ---------------

// The collection of todos is backed by *localStorage* instead of a remote
// server.
class TodoList extends Backbone.Collection {

    // Reference to this collection's model.
    model = Todo;

    // Save all of the todo items under the `"todos"` namespace.
    localStorage = new Store("todos-backbone");

    // Filter down the list of all todo items that are finished.
    done() {
        return this.filter((todo: Todo) => todo.get('done'));
    }

    // Filter down the list to only todo items that are still not finished.
    remaining() {
        return this.without.apply(this, this.done());
    }

    // We keep the Todos in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    nextOrder() {
        if (!length) return 1;
        return this.last().get('order') + 1;
    }

    // Todos are sorted by their original insertion order.
    comparator(todo: Todo) {
        return todo.get('order');
    }

}