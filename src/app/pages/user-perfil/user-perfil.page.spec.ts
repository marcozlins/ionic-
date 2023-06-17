import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { UserPerfilPage } from './user-perfil.page';

describe('UserPerfilPage', () => {
  let component: UserPerfilPage;
  let fixture: ComponentFixture<UserPerfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
