import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    const isAuth = this.auth.isLogged();

    if (!isAuth) {
      this.router.navigateByUrl('login');
    }

    return isAuth;
  }
}
