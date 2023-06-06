import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosformPage } from './produtosform.page';

describe('ProdutosformPage', () => {
  let component: ProdutosformPage;
  let fixture: ComponentFixture<ProdutosformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutosformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
