import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../User/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup;

  constructor(private userService: UserService, private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.forgotForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }
  forgotPwdSubmit() {
    let reqdata = {
      email: this.forgotForm.value.email,
    }

    this.userService.ForgetPassword(reqdata).subscribe((response: any) => {
      console.log(response.message);
      if(response.success == true)
      alert("a reset link has been sent to registered email...!");
    else{
      alert("please enter valid email");
    }

    })
  }

  navigateToLogin()
  {
    this.router.navigateByUrl('login');
  }

}
