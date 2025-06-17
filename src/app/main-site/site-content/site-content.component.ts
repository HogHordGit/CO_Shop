import {AfterViewInit, Component} from '@angular/core';
import {AdminPanelService} from '../../shared/services/admin-panel.service';
import {adminPanelClothesURL} from '../../shared/DbLinks/UrlLinks';
import {ClothesInterface} from '../../shared/types/admin-panel-clothes.interface';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-site-content',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './site-content.component.html',
  standalone: true,
  styleUrl: './site-content.component.scss'
})
export class SiteContentComponent implements AfterViewInit{

  baseAdminListURL:String = adminPanelClothesURL;
  flagAllNewGoods:Number = 0;
  flagAllTopGoods:Number = 0;

  constructor(private adminPanelService: AdminPanelService) {}

  clothes:ClothesInterface[] = [];
  filteredNewClothes:ClothesInterface[] = [];
  filteredTopClothes:ClothesInterface[] = [];

  visibleNewClothes:ClothesInterface[] = [];
  visibleTopClothes:ClothesInterface[] = [];

  ngAfterViewInit() {
    this.adminPanelService.fetchAllData(this.baseAdminListURL).subscribe((data) => {
      this.clothes = data;
    })

    this.filteredNewClothes = this.clothes.filter(item => item.rating == "new");
    this.filteredTopClothes = this.clothes.filter(item => item.rating == "top");

    this.visibleNewClothes = this.filteredNewClothes.slice(0, 4);
    this.visibleTopClothes = this.filteredTopClothes.slice(0, 4);
  }

  btnEventNew() {
    if (!this.flagAllNewGoods) {
      this.visibleNewClothes = this.filteredNewClothes;
      this.flagAllNewGoods = 1;
    } else {
      this.visibleNewClothes = this.filteredNewClothes.slice(0, 4);
      this.flagAllNewGoods = 0;
    }
  }
  btnEventTop() {
    if (!this.flagAllTopGoods) {
      this.visibleTopClothes = this.filteredTopClothes;
      this.flagAllTopGoods = 1;
    } else {
      this.visibleTopClothes = this.filteredTopClothes.slice(0, 4);
      this.flagAllTopGoods = 0;
    }
  }
}
