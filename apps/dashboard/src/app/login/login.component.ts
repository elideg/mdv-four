import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdv-four-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    this.router.navigate(['/']);
  }

  initForm() {
  this.loginForm = this.fb.group({
    email: [''],
    password: ['']
  });
  }
}
