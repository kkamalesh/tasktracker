import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  constructor() { }

  tasks = [

  {"names": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"names": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"names": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"names": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"names": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"names": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"names": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }

  ];

  addToCart(task) {
    this.tasks.unshift(task);
    console.log('task',this.tasks);
    sessionStorage.setItem('tasks',JSON.stringify(this.tasks));
  }

  getItems() {
    return this.tasks;
  }

}
