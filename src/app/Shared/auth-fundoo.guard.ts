
import { Injectable, OnInit } from "@angular/core";
import { AuthServiceService } from "../Services/AuthService/auth-service.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class authFundoo implements OnInit {

  constructor(private auth: AuthServiceService, private router: Router) { }
  ngOnInit(): void {
  }

  canActivate() {
    if (this.auth.IsLoggedIn()) {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }

}
