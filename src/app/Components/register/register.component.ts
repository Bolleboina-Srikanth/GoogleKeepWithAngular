import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../User/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z]{5,13}')]],
      lastName: ['',[Validators.required, Validators.pattern('^[A-Za-z]{5,13}')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{6,13}$')]]
    })
  }

  registerSubmit() {
    let reqdata = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
   if(reqdata.firstName != '' && reqdata.lastName != ''&& reqdata.email != '' && reqdata.password !=''){
    this.userService.Register(reqdata).subscribe((response: any) => {
      console.log(response);
      if (response.success == true) {
        this.registerForm = this.formBuilder.group({
          firstName: [''],
          lastName: [''],
          email: [''],
          password: ['']
        })
        alert("successfully registered")
      }
      else {
        alert("failed to registered");
      }

    })
  }
  }
  navigateToSignIN() {
    this.router.navigateByUrl('login');
  }

}
