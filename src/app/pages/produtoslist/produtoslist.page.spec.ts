import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoslistPage } from './produtoslist.page';

describe('ProdutoslistPage', () => {
  let component: ProdutoslistPage;
  let fixture: ComponentFixture<ProdutoslistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutoslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
