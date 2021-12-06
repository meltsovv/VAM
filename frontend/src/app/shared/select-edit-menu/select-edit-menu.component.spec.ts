import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEditMenuComponent } from './select-edit-menu.component';

describe('SelectEditMenuComponent', () => {
  let component: SelectEditMenuComponent;
  let fixture: ComponentFixture<SelectEditMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectEditMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEditMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
