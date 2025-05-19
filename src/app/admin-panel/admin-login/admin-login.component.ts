import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {AdminsInterface} from '../../shared/types/admin-panel-admins-interface';
import {AdminPanelService} from '../../shared/services/admin-panel.service';
import {adminPanelLoginURL} from '../../shared/DbLinks/UrlLinks';

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
  authService = inject(AuthService);
  router = inject(Router);

  baseAdminLoginURL = adminPanelLoginURL;

  constructor(private adminPanelService: AdminPanelService) {}

  form = this.fb.nonNullable.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  requestData:AdminsInterface = {
    id: 0,
    login: "",
    password: "",
    token: ""
  }

  onSubmit(): void {

    this.requestData.login = this.form.getRawValue().login;
    this.requestData.password = this.form.getRawValue().password;

    this.adminPanelService.createData(this.requestData, this.baseAdminLoginURL).subscribe({
      next: (response) => {
        console.log("response: ", response);
        localStorage.setItem("token", response.admin.token);
        this.authService.currentAdminSig.set(response.admin);
        this.router.navigateByUrl("/admin-panel");
        alert("You Successfully Loged In!")
      },
      error: (err) => {
        console.log(err);
        alert(err.error.message);
      }
    })
  }
}
