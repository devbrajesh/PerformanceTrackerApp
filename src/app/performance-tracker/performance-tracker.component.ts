import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../item';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-performance-tracker',
  templateUrl: './performance-tracker.component.html',
  styleUrls: ['./performance-tracker.component.scss']
})
export class PerformanceTrackerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
