import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoosPage } from './foos.page';

describe('FoosPage', () => {
  let component: FoosPage;
  let fixture: ComponentFixture<FoosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FoosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
