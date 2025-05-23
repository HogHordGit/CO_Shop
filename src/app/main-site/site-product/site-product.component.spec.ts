import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteProductComponent } from './site-product.component';

describe('SiteProductComponent', () => {
  let component: SiteProductComponent;
  let fixture: ComponentFixture<SiteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
