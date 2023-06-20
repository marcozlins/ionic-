import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoEnterPage } from './produto-enter.page';

describe('ProdutoEnterPage', () => {
  let component: ProdutoEnterPage;
  let fixture: ComponentFixture<ProdutoEnterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutoEnterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

