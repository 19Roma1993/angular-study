import {Component, OnInit} from "@angular/core";
import {Todo} from "./classes";
const todos:Todo[] = [
    {
        title: 'Learn JavaScript',
        completed: true
    },
    {
        title: 'Learn Angular 2',
        completed: false
    },
    {
        title: 'Write Application',
        completed: false
    }
];
@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: 'todo.component.html'
})
export class TodoComponent implements OnInit{
    todos:Todo[];
    newTodoTitle:string;

    ngOnInit():void {
        this.todos = todos;
    }

    create() {
        let todo:Todo = new Todo(this.newTodoTitle);
        this.todos.push(todo);
        this.newTodoTitle = '';
    }

    toggle(todo:Todo) {
        todo.completed = !todo.completed;
    };

    delete(todo:Todo) {
        let index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    };
}