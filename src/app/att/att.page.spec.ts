import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttPage } from './att.page';

describe('AttPage', () => {
  let component: AttPage;
  let fixture: ComponentFixture<AttPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AttPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
