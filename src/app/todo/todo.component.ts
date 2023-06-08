import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  items = [
    {
      id: 1,
      description: 'Kahvaltı',
      action: 'Yes',
    },
    {
      id: 2,
      description: 'Spor',
      action: 'Yes',
    },
    {
      id: 3,
      description: 'Alışveriş',
      action: 'Yes',
    },
  ];
  title = 'todo-app-angular';
}
