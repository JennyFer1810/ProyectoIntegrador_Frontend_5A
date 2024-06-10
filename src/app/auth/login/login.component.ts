import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usuario: LoginModel = new LoginModel();

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  onLogin(usuario: LoginModel): void {
    usuario = this.usuario;
    this.authService.login(usuario).subscribe({
      next: (data: any) => {
        if (!data.jwt) {
          console.log('Aqui no hay login');
          console.log(data); 
        } else if (data.jwt) {
          console.log(data);
          this.tokenService.setToken(data.jwt);
          this.router.navigate(["/home"])
        }
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
