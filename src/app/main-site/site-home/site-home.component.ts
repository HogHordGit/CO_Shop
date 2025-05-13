import {Component, NgModule} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SiteFooterComponent} from '../site-footer/site-footer.component';
import {SiteNavComponent} from '../site-nav/site-nav.component';

@Component({
  selector: 'app-site-home',
  imports: [RouterOutlet, SiteFooterComponent, SiteNavComponent],
  templateUrl: './site-home.component.html',
  styleUrl: './site-home.component.scss'
})
export class SiteHomeComponent {

}
