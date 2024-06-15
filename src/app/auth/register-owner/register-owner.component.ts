import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroPropietario } from 'src/app/models/registro.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.scss'],
})
export class RegisterOwnerComponent implements OnInit {
  registroPropietario: RegistroPropietario = new RegistroPropietario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.initializeRegister();
  }

  private initializeRegister() {
    this.registroPropietario = new RegistroPropietario();
  }

  registrarPropietario() {
    if (this.registroPropietario == null) {
      console.log('llena datos');
    } else {
      this.usuarioService.savePropietario(this.registroPropietario).subscribe({
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
