import { Injectable } from '@angular/core';
import { HttpService } from '../../../Services/Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) {
  }
  Register(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.PostMethod('https://localhost:44392/api/User/Register', reqdata, false, header)
  }
  Login(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.PostMethod('https://localhost:44392/api/User/login', reqdata, false, header)
  }

  ForgetPassword(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.PostMethod('https://localhost:44392/api/User/ForgotPassword', reqData, false, header)
  }

  ResetPassword(reqData: any, token: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
    return this.httpService.PostServiceReset('https://localhost:44392/api/User/ResetPassword?NewPassword=' + reqData.NewPassword + '&ConfirmPassword=' + reqData.ConfirmPassword, {}, true, header)
  }

}
