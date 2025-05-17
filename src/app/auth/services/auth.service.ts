import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { EndPoint } from '../enum/endPoint.enum';
import { SignInResponse, SigninUser } from '../interfaces/signin-user';
import { SignUpResponse, SignupUser } from '../interfaces/signup-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly baseUrl: string = environment.baseUrl;
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

  saveUserDate() { }
}
