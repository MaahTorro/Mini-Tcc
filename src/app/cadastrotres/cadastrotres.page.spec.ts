import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrotresPage } from './cadastrotres.page';

describe('CadastrotresPage', () => {
  let component: CadastrotresPage;
  let fixture: ComponentFixture<CadastrotresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrotresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
