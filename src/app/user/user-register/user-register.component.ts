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
    this.RegisterForm = new FormGroup(
      {
        userName: new FormControl('Neha Ghedia', Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(8),
        ]),
        cpassword: new FormControl('', [Validators.required]),
        mobile: new FormControl('', [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(9),
        ]),
      },
      this.passwordMatchingValidator(this.RegisterForm)
    );
  }

  passwordMatchingValidator(formGroup: FormGroup): Validators | null {
    if (!formGroup) {
      return null;
    }
    return formGroup.get('password')?.value ===
      formGroup.get('cpassword')?.value
      ? null
      : { notMatched: true };
  }

  onSubmit() {
    console.log(this.RegisterForm);
  }
}
