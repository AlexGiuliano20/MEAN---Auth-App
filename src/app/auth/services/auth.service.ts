import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private _http: HttpClient) {}

  login(email: string, password: string) {
    const url = `${this._baseUrl}/auth`;
    const body = { email, password };

    return this._http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.ok) {
          this._usuario = {
            name: resp.name!,
            uid: resp.uid!,
          };
        }
      }),
      map((resp) => resp.ok),
      catchError((err) => of(err.error.msg))
    );
  }
}
