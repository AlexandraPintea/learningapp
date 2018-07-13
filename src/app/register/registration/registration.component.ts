import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, Validators.email),
      'gender' : new FormControl('female')
    });
  }
  onSubmit() {
    console.log(this.signUpForm);
  }

}
