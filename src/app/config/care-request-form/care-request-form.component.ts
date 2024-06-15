import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuidadorModel } from 'src/app/models/cuidador.model';
import { MascotaModel } from 'src/app/models/mascota.model';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { CuidadorService } from 'src/app/service/cuidador.service';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-care-request-form',
  templateUrl: './care-request-form.component.html',
  styleUrls: ['./care-request-form.component.scss'],
})
export class CareRequestFormComponent implements OnInit {
  mascotasList: MascotaModel[] = [];
  nombreUsuario: string = '';
  private isEditing: boolean = false;
  solicitud: SolicitudModel = new SolicitudModel();
  private usuario: UsuarioModel = new UsuarioModel();
  private cuidador: CuidadorModel = new CuidadorModel();

  constructor(
    private cuidadorService: CuidadorService,
    private solicitudService: SolicitudService,
    private tokenService: TokenService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    if (history.state.isNew) {
      this.isEditing = true;
      this.solicitud = history.state.data;
      this.valueSetter();
      this.getUser();
    } else {
      this.isEditing = false;
      this.solicitud = new SolicitudModel();
    }
  }

  private valueSetter() {
    this.mascotasList = this.solicitud.mascotas;
    this.nombreUsuario =
      this.solicitud.propietario.usuario.nombre +
      ' ' +
      this.solicitud.propietario.usuario.apellido;
  }

  private getUser() {
    const correo = this.tokenService.getInfoUser();
    this.usuarioService.findByCorreo(correo).subscribe({
      next: (data: UsuarioModel) => {
        this.usuario = data;
      },
    });
    this.cuidadorService.getByUsuarioId(this.usuario.id).subscribe({
      next: (data: CuidadorModel) => {
        this.cuidador = data;
      },
    });
  }

  selectCareRequest() {
    this.solicitud.cuidador = this.cuidador;
    this.solicitudService.update(this.solicitud.id, this.solicitud).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: Error) => {
        console.error(err);
      },
    });
  }
}
