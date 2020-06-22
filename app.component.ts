
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, Input, AfterViewInit } from '@angular/core';
import { TaskService} from './task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  taskForm: FormGroup;
  task = [];
  constructor(private fb: FormBuilder,
              private taskService: TaskService) {}
  
  ngOnInit() {
    this.createTaskForm();
    this.getTaskService();
  }
  
  createTaskForm(){
    this.taskForm = this.fb.group({
      names: ['', Validators.required],
      date:  ['', Validators.required],
      assigned:  ['', Validators.required]
    })
  }
  
  getTaskService(){
    if(!sessionStorage.getItem('tasks')){
       this.task = this.taskService.getItems();
    }else{
      this.task = JSON.parse(sessionStorage.getItem('tasks'));
    }
    
  }

  addTask(task){
    const pushItem = {
      "names": this.taskForm.controls.names.value,
      "date" : this.taskForm.controls.date.value,
      "assigned": this.taskForm.controls.assigned.value
    }
    this.taskService.addToCart(pushItem);
    this.createTaskForm();
    this.task = JSON.parse(sessionStorage.getItem('tasks'));
  }

  delete(data){
    this.task.forEach((element, index) => {
      if(data === element){
        this.task.splice(index,1);
        sessionStorage.setItem('tasks',JSON.stringify(this.task));
      }
    }); 
  }
}
