import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Şenay';
    this.items = [
      {
        id: 0,
        description: 'Kahvaltı',
        action: true,
      },
      {
        id: 1,
        description: 'Spor',
        action: false,
      },
      {
        id: 3,
        description: 'Alışveriş',
        action: true,
      },
    ];
  }
}
