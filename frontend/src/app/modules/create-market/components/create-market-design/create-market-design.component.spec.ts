import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMarketDesignComponent } from './create-market-design.component';

describe('CreateMarketDesignComponent', () => {
  let component: CreateMarketDesignComponent;
  let fixture: ComponentFixture<CreateMarketDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMarketDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMarketDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
