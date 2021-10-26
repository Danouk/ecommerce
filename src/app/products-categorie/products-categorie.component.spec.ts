import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategorieComponent } from './products-categorie.component';

describe('ProductsCategorieComponent', () => {
  let component: ProductsCategorieComponent;
  let fixture: ComponentFixture<ProductsCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
