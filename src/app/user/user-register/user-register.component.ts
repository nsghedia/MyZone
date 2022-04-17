import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  user: any = {};
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.RegisterForm = new FormGroup(
    //   {
    //     userName: new FormControl('Neha Ghedia', Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //     password: new FormControl('', [
    //       Validators.required,
    //       Validators.maxLength(15),
    //       Validators.minLength(8),
    //     ]),
    //     cpassword: new FormControl('', [Validators.required]),
    //     mobile: new FormControl('', [
    //       Validators.required,
    //       Validators.maxLength(15),
    //       Validators.minLength(9),
    //     ]),
    //   },
    //   this.passwordMatchingValidator(this.RegisterForm)
    // );
    this.createRegisterationForm();
  }

  createRegisterationForm() {
    this.RegisterForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, Validators.required, Validators.email],
        password: [
          null,
          [
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(8),
          ],
        ],
        cpassword: [
          null,
          [
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(8),
          ],
        ],
        mobile: [
          null,
          [
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(9),
          ],
        ],
      },
      { Validators: this.passwordMatchingValidator }
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
    this.user = Object.assign(this.user, this.RegisterForm.value);
    // localStorage.setItem("User",JSON.stringify(this.user));
    this.addUsers(this.user);
  }

  Compare() {
    if (
      this.RegisterForm.get('password')?.value ===
      this.RegisterForm.get('cpassword')?.value
    ) {
      console.log('Matched');
    }
  }

  addUsers(user: any) {
    let users = [];
    if (localStorage.getItem('User')) {
      users = JSON.parse(localStorage.getItem('User') || '{}');
      users = [user, ...users];
    } else{
      users = [user];
    }
     localStorage.setItem('User', JSON.stringify(users));
  }
}
