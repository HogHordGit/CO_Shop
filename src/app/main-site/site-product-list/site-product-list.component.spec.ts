import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteProductListComponent } from './site-product-list.component';

describe('SiteProductListComponent', () => {
  let component: SiteProductListComponent;
  let fixture: ComponentFixture<SiteProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteProductListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
