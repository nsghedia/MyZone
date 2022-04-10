import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  constructor() {}

  ngOnInit() {
    this.RegisterForm = new FormGroup({
      userName: new FormControl('Neha Ghedia', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      cpassword: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.RegisterForm);
  }
}
