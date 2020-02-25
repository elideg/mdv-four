import { Component } from '@angular/core';

@Component({
  selector: 'mdv-four-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdv-four';

  links = [
    { path: '/projects', icon: 'toc', title: 'Project' }
  ]
}


