import {AfterViewInit, Component} from '@angular/core';
import {mainSiteParticularItem} from '../../shared/DbLinks/UrlLinks';
import {AdminPanelService} from '../../shared/services/admin-panel.service';
import {ClothesInterface} from '../../shared/types/admin-panel-clothes.interface';
import {ActivatedRoute} from '@angular/router';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-site-detail',
  imports: [
    CommonModule
  ],
  templateUrl: './site-detail.component.html',
  standalone: true,
  styleUrl: './site-detail.component.scss'
})
export class SiteDetailComponent implements AfterViewInit{
  baseAdminListURL = mainSiteParticularItem;

  constructor(private adminPanelService: AdminPanelService, private route: ActivatedRoute) {}

  clothItem: ClothesInterface[] = [];

  ngAfterViewInit() {
    this.adminPanelService.fetchParticularData(Number(this.route.snapshot.paramMap.get("id")), this.baseAdminListURL).subscribe((data) => {
      this.clothItem = data;
      console.log(this.clothItem);
    })
  }
}
