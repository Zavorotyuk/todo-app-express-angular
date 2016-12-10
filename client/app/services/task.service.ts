import { Injectable, Inject } from '@angular/core';
import { Http, headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectagble();

export class TaskService {
  constructor(@Inject(Http) private http:Http) {
    console.log("Task Service initialized");
  }
}
