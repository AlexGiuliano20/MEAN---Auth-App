import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  miFormulario: FormGroup = this._fb.group({
    email: [
      'test1@test.com',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private _fb: FormBuilder,
    private _route: Router,
    private _authService: AuthService
  ) {}

  login() {
    console.log(this.miFormulario.value);
    const { email, password } = this.miFormulario.value;

    this._authService.login(email, password).subscribe((ok) => {
      console.log(ok);
      if (ok === true) {
        this._route.navigateByUrl('/dashboard');
      } else {
        Swal.fire('Error', ok, 'error');
      }
    });
  }
}
