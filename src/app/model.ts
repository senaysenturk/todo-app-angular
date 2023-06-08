import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Şenay';
    this.items = [
      {
        description: 'Kahvaltı',
        action: 'Yes',
      },
      {
        description: 'Spor',
        action: 'No',
      },
      {
        description: 'Alışveriş',
        action: 'Yes',
      },
    ];
  }
}
