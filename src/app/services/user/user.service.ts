import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: IUser | null;
  private token: string | undefined;
  constructor() {}

  getUser(): IUser | void {
    if (this.user) {
      return this.user;
    }
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setToken(token: string): void {
    this.token = token;
    window.localStorage.setItem('token', this.token);
  }

  getToken(): string | void {
    if (this.token) {
      return this.token;
    } else {
      const isTokenInStorage = window.localStorage.getItem('token');

      if (isTokenInStorage) {
        return isTokenInStorage;
      }
    } // возвращает поле
  }

  deleteToken() {
    this.user = null;
    this.token = '';
    window.localStorage.removeItem('token');
  }
}
