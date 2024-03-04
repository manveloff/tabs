import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Other3Page } from './other3.page';

describe('Other3Page', () => {
  let component: Other3Page;
  let fixture: ComponentFixture<Other3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Other3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
