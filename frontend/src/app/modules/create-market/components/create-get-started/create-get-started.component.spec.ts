import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGetStartedComponent } from './create-get-started.component';

describe('CreateGetStartedComponent', () => {
  let component: CreateGetStartedComponent;
  let fixture: ComponentFixture<CreateGetStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGetStartedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
