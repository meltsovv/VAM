import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomBlockComponent } from './select-custom-block.component';

describe('SelectCustomBlockComponent', () => {
  let component: SelectCustomBlockComponent;
  let fixture: ComponentFixture<SelectCustomBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCustomBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCustomBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
