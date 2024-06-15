import { Component, OnInit } from '@angular/core';
import { MascotaModel } from 'src/app/models/mascota.model';
import { PropietarioModel } from 'src/app/models/propietario.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { MascotaService } from 'src/app/service/mascota.service';
import { PropietarioService } from 'src/app/service/propietario.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss'],
})
export class ListPetsComponent implements OnInit {
  mascotasList: MascotaModel[] = [];
  propietario: PropietarioModel = new PropietarioModel();
  usuario: UsuarioModel = new UsuarioModel();

  constructor(
    private mascotaService: MascotaService,
    private propietarioService: PropietarioService,
    private tokenService: TokenService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    const correo = this.tokenService.getInfoUser();
    this.usuarioService.findByCorreo(correo).subscribe({
      next: (data: UsuarioModel) => {
        this.usuario = data;
        this.propietarioService.getByUsuarioId(this.usuario.id).subscribe({
          next: (data: PropietarioModel) => {
            this.propietario = data;
            this.mascotasList = this.propietario.mascotas;
            console.log(this.propietario);
          },
          error: (err: Error) => {
            console.error(err);
          },
        });
      },
      error: (err: Error) => {
        console.error(err);
      },
    });
  }

  deleteMascota(index: number, mascota: MascotaModel) {
    this.propietario.mascotas.splice(index, 1);

    this.propietarioService
      .update(this.propietario.id, this.propietario)
      .subscribe({
        next: (data: any) => {
          console.log('Propietario actualizado:', data);
        },
        error: (err: any) => {
          console.error('Error al actualizar propietario:', err);
        },
      });

    this.mascotaService.delete(mascota.id).subscribe({
      next: (data: any) => {
        console.log('Mascota eliminada:', data);
      },
      error: (err: any) => {
        console.error('Error al eliminar mascota:', err);
      },
    });
  }
}
