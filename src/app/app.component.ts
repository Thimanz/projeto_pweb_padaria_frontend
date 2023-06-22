import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projeto_web';

  constructor(private service: LocalStorageService) {
    if (!service.getSession()) {
      const sessionId = uuidv4();
      service.setSession(sessionId);
    }
  }
}
