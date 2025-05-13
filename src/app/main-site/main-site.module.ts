import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SiteFooterComponent} from './site-footer/site-footer.component';
import {SiteHomeComponent} from './site-home/site-home.component';
import {RouterModule} from '@angular/router';
import {SiteNavComponent} from './site-nav/site-nav.component';
import {SiteContentComponent} from './site-content/site-content.component';


@NgModule({
  declarations: [SiteFooterComponent, SiteHomeComponent, SiteNavComponent, SiteContentComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainSiteModule { }
