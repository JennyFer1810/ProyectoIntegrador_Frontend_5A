import { Component, OnInit } from '@angular/core';
import { DireccionModel } from 'src/app/models/direccion.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { DireccionService } from 'src/app/service/direccion.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.scss'],
})
export class RegisterAddressComponent implements OnInit {
  direccionesList: DireccionModel[] = [];
  direccion: DireccionModel = new DireccionModel();
  auxDireccion: DireccionModel = new DireccionModel();
  usuario: UsuarioModel = new UsuarioModel();
  isEditing: boolean = false;

  constructor(
    private tokenService: TokenService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.listadoDirecciones();
  }

  private listadoDirecciones() {
    const correo = this.tokenService.getInfoUser();
    console.log(this.tokenService.getToken());

    this.usuarioService.findByCorreo(correo).subscribe({
      next: (data: UsuarioModel) => {
        this.usuario = data;
        this.direccionesList = data.direcciones;
        console.log(this.usuario);
      },
    });
  }

  selectDireccion(direccion: DireccionModel) {
    this.direccion = direccion;
    this.isEditing = !this.isEditing;
  }

  deleteDireccion() {
    this.direccion = new DireccionModel();
    this.isEditing = false;
  }

  saveDirecciones() {
    this.usuario.direcciones.push(this.direccion);
    this.usuarioService.update(this.usuario.id, this.usuario).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
