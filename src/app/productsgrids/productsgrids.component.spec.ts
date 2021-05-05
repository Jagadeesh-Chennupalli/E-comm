import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsgridsComponent } from './productsgrids.component';

describe('ProductsgridsComponent', () => {
  let component: ProductsgridsComponent;
  let fixture: ComponentFixture<ProductsgridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsgridsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsgridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
