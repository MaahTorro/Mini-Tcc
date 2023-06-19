import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstoquePage } from './estoque.page';

describe('EstoquePage', () => {
  let component: EstoquePage;
  let fixture: ComponentFixture<EstoquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstoquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
