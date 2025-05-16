import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {AdminPanelService} from '../../shared/services/admin-panel.service';

import {MatSort, MatSortModule} from '@angular/material/sort';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {adminPanelClothesURL} from '../../shared/DbLinks/UrlLinks';
import {ClothesInterface} from '../../shared/types/admin-panel-clothes-interface';

@Component({
  selector: 'app-admin-clothes',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule,
    MatSortModule, MatPaginatorModule, CommonModule, FormsModule],
  templateUrl: './admin-clothes.component.html',
  standalone: true,
  styleUrl: './admin-clothes.component.scss'
})
export class AdminClothesComponent implements AfterViewInit{
  displayedColumns: string[] = ["id", "name", "prise", "rating", "description", "discount", "size", "color", "img", "quantity", "edit", "delete"];
  dataSource = new MatTableDataSource<ClothesInterface>();

  baseAdminClothesURL = adminPanelClothesURL;

  constructor(private adminPanelService: AdminPanelService) {}

  @ViewChild(MatSort) sort: any;
  @ViewChild(MatPaginator) paginator: any;

  cloth:ClothesInterface = {
    id: 0,
    name: "",
    prise: 0,
    rating: "",
    description: "",
    discount: 0,
    size: "",
    color: "",
    img: "",
    quantity: 0
  }

  clothes:ClothesInterface[] = [];
  filteredClothes:ClothesInterface[] = [];

  ngAfterViewInit() {
    this.adminPanelService.fetchAllData(this.baseAdminClothesURL).subscribe((data) => {
      this.clothes = data;
      this.dataSource = new MatTableDataSource<ClothesInterface>(data);

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 100);
    })
  }

  searchClothes(input: any) {
    this.filteredClothes = this.clothes.filter(item =>
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.rating.toLowerCase().includes(input.toLowerCase()) ||
      item.description.toLowerCase().includes(input.toLowerCase()) ||
      item.size.toLowerCase().includes(input.toLowerCase()) ||
      item.id.toString().includes(input)
    );

    this.dataSource = new MatTableDataSource<ClothesInterface>(this.filteredClothes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  PostPutClothes(cloth:ClothesInterface) {
    if (cloth.id !== 0) {
      this.adminPanelService.updateData(cloth, this.baseAdminClothesURL).subscribe({
        next: (data) => {
          console.log(`Admin updated Successfully!`);
          window.location.reload();
        },
        error: (err) => {
          console.log(err);
          window.location.reload();
        }
      })
    } else {
      this.adminPanelService.createData(cloth, this.baseAdminClothesURL).subscribe({
        next: (data) => {
          console.log(`New Admin created Successfully!`);
          window.location.reload();
        },
        error: (err) => {
          console.log(err);
          window.location.reload();
        }
      })
    }
  }

  putClothesFormField(cloth: ClothesInterface) {
    this.cloth.id = cloth.id;
    this.cloth.name = cloth.name;
    this.cloth.prise = cloth.prise;
    this.cloth.rating = cloth.rating;
    this.cloth.description = cloth.description;
    this.cloth.discount = cloth.discount;
    this.cloth.size = cloth.size;
    this.cloth.color = cloth.color;
    this.cloth.img = cloth.img;
    this.cloth.quantity = cloth.quantity;
  }

  deleteClothesFormField(id: Number) {
    const  isConfirmed = window.confirm("Are you sure you want to DELETE?");

    if (isConfirmed) {
      this.adminPanelService.deleteData(id, this.baseAdminClothesURL).subscribe((data) => {
        this.clothes = this.clothes.filter(item => item.id !== id);

        window.location.reload();
      });
    }
  }
}
