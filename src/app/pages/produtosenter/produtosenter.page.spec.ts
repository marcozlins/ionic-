import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosenterPage } from './produtosenter.page';

describe('ProdutosenterPage', () => {
  let component: ProdutosenterPage;
  let fixture: ComponentFixture<ProdutosenterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutosenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
