import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@mdv-four/core-data';

@Component({
  selector: 'mdv-four-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: Project
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  delete(project: Project) {
    this.deleted.emit(project);
  }

  select(project: Project) {
    this.selected.emit(project);
  }
}
