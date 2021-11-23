import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class SignOutOnUnauthirizedResponseInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        () => {},
        (error) => {
          // if (error.status === HttpCodeEnum.UNAUTHORIZED) {
          //   this.authService.signOut();
          // }
        },
      ),
    );
  }
}
