import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {
    /* TODO document why this constructor is empty */
  }

  isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  setToken(token: string): void {
    window.sessionStorage.setItem('token', token);
  }

  getToken(): any {
    return sessionStorage.getItem('token');
  }

  getInfoUser(): string | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const nombre_usuario = valuesJson?.sub;
    return nombre_usuario || null;
  }

  isAdmin(): boolean | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const roles = valuesJson?.roles;
    console.log(roles);

    if (roles && roles.indexOf('admin') >= 0) {
      return true;
    }
    return false;
  }

  logOut(): void {
    sessionStorage.clear();
  }
}
