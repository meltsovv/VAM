import { Component } from '@angular/core';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'beepAngular';

  constructor(private service: QuestionsService) {
    this.service.ensureSessionIdIsSet();
  }
}
