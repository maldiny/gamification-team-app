import { Auditoria } from './auditoria';

export class Tasks {
  tipo: string;
  descripcion: string;
  puntos: Number;
  reporter: string;
  asignado: string;
  estado: string;
  auditoria: Auditoria;
  _links: Links;
}

export class Links {
	tasks: Href;
}

export class Href {
	href: String;
}

export class EmbeddedTasks {
	tasks: Tasks[];
}