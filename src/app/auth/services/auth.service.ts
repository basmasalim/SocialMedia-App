import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { EndPoint } from '../enum/endPoint.enum';
import { SignInResponse, SigninUser } from '../interfaces/signin-user';
import { SignUpResponse, SignupUser } from '../interfaces/signup-user';
import { jwtDecode } from 'jwt-decode'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly baseUrl: string = environment.baseUrl;

  userDate: BehaviorSubject<any> = new BehaviorSubject(null);

  signUpUser(userInfo: SignupUser): Observable<SignUpResponse> {
    return this.httpClient.post<SignUpResponse>(
      this.baseUrl + EndPoint.signUp,
      userInfo
    );
  }
  signInUser(userInfo: SigninUser): Observable<SignInResponse> {
    return this.httpClient.post<SignInResponse>(
      this.baseUrl + EndPoint.signIn,
      userInfo
    );
  }

  saveUserDate() {
    if (localStorage.getItem('token')) {
      this.userDate.next(jwtDecode(localStorage.getItem('token')!));
    }
  }

  signOutUser() {
    localStorage.removeItem('token');
    this.userDate.next(null);
    this.router.navigate(['/signin']);
  }
}
