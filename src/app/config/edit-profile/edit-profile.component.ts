import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateUsuarioModel, UsuarioModel } from 'src/app/models/usuario.model';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  auxUsuario: UpdateUsuarioModel = new UpdateUsuarioModel();
  usuario: UsuarioModel = new UsuarioModel();

  constructor(
    private tokenService: TokenService,
    private usuarioService: UsuarioService,
    private router: Router
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
        this.router.navigate(['/config/profile'])
      },
      error: (err: Error) => {
        console.error(err);
      },
    });
  }
}
