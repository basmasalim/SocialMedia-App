import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { AuthUser } from '../interfaces/auth-user';
import { LoginUser } from '../interfaces/login-user';
import { SignUpResponse } from '../interfaces/sign-up-response';
import { SignInResponse } from '../interfaces/sign-in-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpClient = inject(HttpClient);
  constructor() { }
  signUpUser(userInfo: AuthUser): Observable<SignUpResponse> {
    return this.httpClient.post<SignUpResponse>(`${environment.baseUrl}/users/signup`, userInfo);
  }


  signInUser(userInfo: LoginUser): Observable<SignInResponse> {
    return this.httpClient.post<SignInResponse>(`${environment.baseUrl}/users/signin`, userInfo)
  }
}
