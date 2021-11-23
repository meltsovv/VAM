import { Injectable } from '@angular/core';
// import jwt_decode from 'jwt-decode';
// import { JwtPayload } from '../core/types/others/jwt-payload';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  token: string = '';

  constructor() {}

  getToken() {
    return localStorage.getItem('accessToken') || '';
  }

  getEmail() {
    // const decoded: JwtPayload = jwt_decode(localStorage.getItem('accessToken') || '');
    // return decoded.username;
  }

  signOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('googleAuth');
  }
}
