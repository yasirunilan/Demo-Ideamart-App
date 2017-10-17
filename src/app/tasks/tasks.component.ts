import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { PostsService } from '../posts.service';
import {HttpModule} from '@angular/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: any = [];

  constructor(private tasksService: TaskService) { }

  ngOnInit() {
    // Retrieve tasks from the API
    this.tasksService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

}
