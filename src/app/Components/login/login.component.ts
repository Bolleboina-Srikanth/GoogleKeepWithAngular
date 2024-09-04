import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/Http/http.service';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { UserService } from '../User/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private userService: UserService, private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{6,13}$')]]
    })
  }
  LoginSubmit() {
    let reqdata = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    if (reqdata.email != '' && reqdata.password != '') {
      this.userService.Login(reqdata).subscribe((response: any) => {
        console.log(response.date);
        if (response.date != null)
          localStorage.setItem('token', response.date);
        this.router.navigateByUrl('dashboard');
      })
    }
  }

  // regietr
  navigateToReister() {
    this.router.navigateByUrl('register');
  }

  navigateToforgotpwd() {
    this.router.navigateByUrl('forgotpassword');
  }

}


