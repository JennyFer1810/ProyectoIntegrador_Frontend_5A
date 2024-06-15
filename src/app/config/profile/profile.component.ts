import { Component, OnInit } from '@angular/core';
import { UpdateUsuarioModel, UsuarioModel } from 'src/app/models/usuario.model';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  auxUsuario: UpdateUsuarioModel = new UpdateUsuarioModel();
  usuario: UsuarioModel = new UsuarioModel();
  isEditing: boolean = false;

  constructor(
    private tokenService: TokenService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  private getUsuario() {
    const correo = this.tokenService.getInfoUser();
    console.log(this.tokenService.getToken());

    this.usuarioService.findByCorreo(correo).subscribe({
      next: (data: UsuarioModel) => {
        this.usuario = data;
      },
    });
  }

  updateUsuario() {
    this.auxUsuario = this.usuario;
    this.usuarioService.update(this.auxUsuario.id, this.auxUsuario).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
