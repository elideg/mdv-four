import { Component } from '@angular/core';

@Component({
  selector: 'mdv-four-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdv-four';

  links = [
    { path: '/', icon: 'toc', title: 'Project' },
    // { path: '/login', icon: 'lock', title: 'Login' }
  ]
}


