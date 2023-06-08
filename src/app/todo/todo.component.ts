import { Component } from '@angular/core';
import { TodoItem } from '../todoitem';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {}
  //items: TodoItem[] = [
  // {
  //   description: 'Kahvaltı',
  //   action: 'Yes',
  // },
  // {
  //   description: 'Spor',
  //   action: 'Yes',
  // },
  // {
  //   description: 'Alışveriş',
  //   action: 'Yes',
  // },

  //Constructor ile kullanım
  // new TodoItem('Kahvaltı', 'Yes'),
  // new TodoItem('Spor', 'No'),
  // new TodoItem('Alışveriş', 'Yes'),

  //Interface ile kullanım
  // {
  //   description: 'Kahvaltı',
  //   action: 'Yes',
  // },
  // {
  //   description: 'Spor',
  //   action: 'No',
  // },
  // {
  //   description: 'Alışveriş',
  //   action: 'Yes',
  // },
  // ];

  model = new Model();
  getName() {
    return this.model.name;
  }

  getItems() {
    return this.model.items;
  }
}
