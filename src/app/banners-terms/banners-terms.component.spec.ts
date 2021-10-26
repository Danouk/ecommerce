import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersTermsComponent } from './banners-terms.component';

describe('BannersTermsComponent', () => {
  let component: BannersTermsComponent;
  let fixture: ComponentFixture<BannersTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
