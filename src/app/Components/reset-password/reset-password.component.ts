import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../User/User/user.service';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  token: any;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{6,13}$')]],
      confirmPassword: ['', [Validators.required]]
    })
    console.log(
    (this.resetForm.value.password == this.resetForm.value.confirmPassword)

    );
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  resetSubmit() {

    let reqdata = {
      NewPassword: this.resetForm.value.password,
      ConfirmPassword: this.resetForm.value.confirmPassword
    }
    var datavalid = true;
    if(reqdata.NewPassword !== reqdata.ConfirmPassword)
    {
      datavalid = false;
      alert("password must match");
    }
    if (reqdata.NewPassword != '' && reqdata.ConfirmPassword != '' && datavalid) {
      this.userService.ResetPassword(reqdata, this.token).subscribe((response: any) => {
        console.log(response);
        if (response.success == true)
          this.router.navigateByUrl('login');
      })
    }

    }

    navigateToLogin() {
      this.router.navigateByUrl('login');
    }

  }


