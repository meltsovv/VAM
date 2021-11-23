import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService, private api: ApiService) {}

  canActivate(): Observable<boolean | UrlTree> | boolean {
    if (this.auth.getToken() === '') {
      this.router.navigate(['/login']);
      this.auth.signOut();
      return false;
    }
    this.auth.signOut();
    return false;
  }
}
