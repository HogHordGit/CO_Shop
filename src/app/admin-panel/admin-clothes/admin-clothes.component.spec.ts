import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClothesComponent } from './admin-clothes.component';

describe('AdminClothesComponent', () => {
  let component: AdminClothesComponent;
  let fixture: ComponentFixture<AdminClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminClothesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
