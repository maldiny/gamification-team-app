import { TaskTypes } from './tasktypes';
import { Auditoria } from './auditoria';

export class Roles {
  id: string;
  nombre: string;
  descripcion: string;
  caracteristicas: string;
  tiposTareas: TaskTypes[];
  auditoria: Auditoria;
  _links: Links;
}

export class Links {
	roles: Href;
}

export class Href {
	href: String;
}

export class EmbeddedRoles {
	roles: Roles[];
}