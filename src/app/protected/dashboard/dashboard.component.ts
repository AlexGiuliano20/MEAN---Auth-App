import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 15px;
      }
    `,
  ],
})
export class DashboardComponent {
  get usuario() {
    return this._authService.usuario;
  }

  constructor(private _route: Router, private _authService: AuthService) {}

  logout() {
    this._route.navigateByUrl('/auth');
  }
}
