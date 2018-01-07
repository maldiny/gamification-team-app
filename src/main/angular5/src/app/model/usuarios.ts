import { Roles } from './roles';
import { Tasks } from './tasks';
import { Auditoria } from './auditoria';
import { Alertas } from './alertas';

export class Usuarios {
  id: string;
  nombre: string;
  apellidos: string;
  password: string;
  rol: string;
  tasks: Tasks[];
  alertas: Alertas[];
  auditoria: Auditoria;
  _links: Links;
}

export class Links {
	usuarios: Href;
}

export class Href {
	href: String;
}

export class EmbeddedUsuarios {
	usuarios: Usuarios[];
}