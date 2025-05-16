import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-home',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-home.component.html',
  standalone: true,
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {

}
