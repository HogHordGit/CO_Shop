import {AfterViewInit, Component} from '@angular/core';
import {AdminPanelService} from '../../shared/services/admin-panel.service';
import {adminPanelClothesURL} from '../../shared/DbLinks/UrlLinks';
import {ClothesInterface} from '../../shared/types/admin-panel-clothes-interface';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-site-content',
  imports: [CommonModule],
  templateUrl: './site-content.component.html',
  styleUrl: './site-content.component.scss'
})
export class SiteContentComponent implements AfterViewInit{

  baseAdminListURL = adminPanelClothesURL;

  constructor(private adminPanelService: AdminPanelService) {}

  clothes:ClothesInterface[] = [];
  filteredNewClothes:ClothesInterface[] = [];

  ngAfterViewInit() {
    this.adminPanelService.fetchAllData(this.baseAdminListURL).subscribe((data) => {
      this.clothes = data;
    })

    this.filteredNewClothes = this.clothes.filter(item => item.rating == "new");
  }
}
