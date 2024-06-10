import { DireccionModel } from './direccion.model';

export class UsuarioModel {
  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  fechaRegistro: Date = new Date();
  esAceptado: boolean = false;
  estado: boolean = false;
  identificacion: string = '';
  telefono: string = '';
  roles: string[] = [];
  direcciones: DireccionModel[] = [];
}
