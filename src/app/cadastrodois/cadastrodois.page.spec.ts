import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrodoisPage } from './cadastrodois.page';

describe('CadastrodoisPage', () => {
  let component: CadastrodoisPage;
  let fixture: ComponentFixture<CadastrodoisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrodoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
