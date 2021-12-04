import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShadowComponent } from './select-shadow.component';

describe('SelectShadowComponent', () => {
  let component: SelectShadowComponent;
  let fixture: ComponentFixture<SelectShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectShadowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
