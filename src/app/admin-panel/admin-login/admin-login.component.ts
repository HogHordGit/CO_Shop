import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './admin-login.component.html',
  standalone: true,
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit(): void {
    console.log("login")
  }
}
