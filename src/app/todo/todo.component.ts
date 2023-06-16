import { Component } from '@angular/core';
import { TodoItem } from '../todoitem';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  displayAll: boolean = true;
  inputText: string = '';
  constructor() {
    this.model.items = this.getFromLocalStorage();
  }
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
  addItem() {
    if (this.inputText) {
      let data = { description: this.inputText, action: false };
      this.model.items.push(data);

      let items = this.getFromLocalStorage();
      items.push(data);
      localStorage.setItem('items', JSON.stringify(items));

      this.inputText = '';
    }
  }

  getFromLocalStorage() {
    let items: TodoItem[] = [];
    var localValue = localStorage.getItem('items');
    if (localValue != null) items = JSON.parse(localValue);
    console.log(items);

    return items;
  }
  getItems() {
    // alert(this.displayAll)
    if (this.displayAll) return this.model.items;
    return this.model.items.filter((item) => !item.action);
  }
}
