export class RegistroCuidador {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  esAceptado: boolean = false;
  estado: boolean = true;
  roles: string[] = ['ROL_CUIDADOR'];
  identificacion: string = '';
  telefono: string = '';
}

export class RegistroPropietario {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  esAceptado: boolean = false;
  estado: boolean = true;
  roles: string[] = ['ROL_PROPIETARIO'];
  identificacion: string = '';
  telefono: string = '';
}
