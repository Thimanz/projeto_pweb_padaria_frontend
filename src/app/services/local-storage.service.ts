import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }
  setSession(uuid: string) {
    this.storage.setItem('sessionId', uuid);
  }

  getSession(): string {
    return String(this.storage.getItem('sessionId'));
  }

  isLogged(logged: boolean) {
    const loggedString = logged.toString();
    this.storage.setItem('isLogged', loggedString);
  }
}
