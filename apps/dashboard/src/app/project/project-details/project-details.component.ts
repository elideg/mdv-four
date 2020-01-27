import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from '@mdv-four/core-data';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv-four-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
  currentProject: Project;
  originalTitle;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() form: FormGroup;
  @Input() set project(value) {
    if(value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  };

  submitForm(formDirective: NgForm): void {
    this.saved.emit(this.form.value);
    formDirective.resetForm();
  }

  cancel(project: Project) {
    this.cancelled.emit(project);
  }
}
