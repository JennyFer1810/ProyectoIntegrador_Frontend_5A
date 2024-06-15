import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroCuidador } from 'src/app/models/registro.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-register-carer',
  templateUrl: './register-carer.component.html',
  styleUrls: ['./register-carer.component.scss'],
})
export class RegisterCarerComponent implements OnInit {
  registroCuidador: RegistroCuidador = new RegistroCuidador();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.initializeRegister();
  }

  private initializeRegister() {
    this.registroCuidador = new RegistroCuidador();
  }

  registrarCuidador() {
    if (this.registroCuidador == null) {
      console.log('llena datos');
    } else {
      this.usuarioService.saveCuidador(this.registroCuidador).subscribe({
        next: (data: any) => {
          console.log(data);
          this.router.navigate(['/home']);
        },
        error: (err: Error) => {
          console.error(err);
        },
      });
    }
  }
}
