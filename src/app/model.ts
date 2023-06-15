import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Şenay';
    this.items = [
      {
        description: 'Kahvaltı',
        action: true,
      },
      {
        description: 'Spor',
        action:false,
      },
      {
        description: 'Alışveriş',
        action: true
      },
    ];
  }
}
