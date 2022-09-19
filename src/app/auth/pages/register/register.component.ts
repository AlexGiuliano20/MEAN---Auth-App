import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  miFormulario: FormGroup = this._fb.group({
    name: ['Test1', [Validators.required]],
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

  constructor(private _fb: FormBuilder, private _route: Router) {}

  register() {
    console.log(this.miFormulario.value);

    this._route.navigateByUrl('/dashboard');
  }
}
