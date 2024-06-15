import { Component, OnInit } from '@angular/core';
import { CatalogoModel } from 'src/app/models/catalogo.model';
import { MascotaModel } from 'src/app/models/mascota.model';
import { PropietarioModel } from 'src/app/models/propietario.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { CatalogoService } from 'src/app/service/catalogo.service';
import { PropietarioService } from 'src/app/service/propietario.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-register-pets',
  templateUrl: './register-pets.component.html',
  styleUrls: ['./register-pets.component.scss'],
})
export class RegisterPetsComponent implements OnInit {
  mascota: MascotaModel = new MascotaModel();
  tipoMascotaList: CatalogoModel[] = [];
  usuario: UsuarioModel = new UsuarioModel();
  propietario: PropietarioModel = new PropietarioModel();

  constructor(
    private catalogoService: CatalogoService,
    private usuarioService: UsuarioService,
    private propietarioService: PropietarioService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getCatalogoList();
  }

  private async getCatalogoList() {
    await this.catalogoService.getList().subscribe({
      next: (data: CatalogoModel[]) => {
        this.tipoMascotaList = data.filter((tipo) => {
          return (
            tipo.nombreCatalogo.toLowerCase() === 'mascota' &&
            tipo.estado == true
          );
        });
      },
    });
  }

  compareWith(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  private getUser() {
    const correo = this.tokenService.getInfoUser();
    this.usuarioService.findByCorreo(correo).subscribe({
      next: (data: UsuarioModel) => {
        this.usuario = data;
        this.propietarioService.getByUsuarioId(this.usuario.id).subscribe({
          next: (data: PropietarioModel) => {
            this.propietario = data;
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

  saveMascota(mascota: MascotaModel) {
    if (!this.propietario.mascotas) {
      this.propietario.mascotas = [];
    }
    this.propietario.mascotas.push(mascota);
      this.propietarioService
        .update(this.propietario.id, this.propietario)
        .subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (err: Error) => {
            console.error(err);
          },
        });
    console.log(this.propietario);
  }
}
