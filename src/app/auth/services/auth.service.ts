import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _baseUrl: string = environment.baseUrl;
  constructor(private _http: HttpClient) {}

  login(email: string, password: string) {
    const url = `${this._baseUrl}/auth`;
    const body = { email, password };

    return this._http.post<AuthResponse>(url, body);
  }
}
