import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelainicialPage } from './telainicial.page';

describe('TelainicialPage', () => {
  let component: TelainicialPage;
  let fixture: ComponentFixture<TelainicialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TelainicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
