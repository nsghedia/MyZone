import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  @ViewChild('AddCardForm') AddCardForm!: NgForm;
  AddCardFormSubmitted: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit(AddCardForm: NgForm) {
    // alert(AddCardForm.status);
    this.AddCardFormSubmitted = true;
    console.log(AddCardForm);
  }

  onSubmitOtherWay() {
    // this.AddCardFormSubmitted = true;
    // console.log(this.AddCardForm);
  }
}
