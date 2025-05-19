import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-home',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-home.component.html',
  standalone: true,
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {

  router = inject(Router);

  logOut(): void{
    console.log("logOut");
    localStorage.setItem("token", "");
    this.router.navigateByUrl("/admin-panel/login");
  }
}
