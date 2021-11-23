import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { AppComponent } from './app.component';
import { QuestionsService } from './services/questions.service';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    TestBed.configureTestingModule({
      providers: [
        {
          provide: QuestionsService,
          useValue: {
            ensureSessionIdIsSet: jest.fn(),
          },
        },
      ],
    });
  });

  beforeEach(() => {
    const service: QuestionsService = TestBed.inject(QuestionsService);
    component = new AppComponent(service);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'beepAngular'`, () => {
    expect(component.title).toEqual('beepAngular');
  });
});
