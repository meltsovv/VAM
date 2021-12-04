import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStyleForHeaderComponent } from './select-style-for-header.component';

describe('SelectStyleComponent', () => {
  let component: SelectStyleForHeaderComponent;
  let fixture: ComponentFixture<SelectStyleForHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectStyleForHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectStyleForHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
