import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutPage } from './prodcut-page';

describe('ProdcutPage', () => {
  let component: ProdcutPage;
  let fixture: ComponentFixture<ProdcutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdcutPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdcutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
