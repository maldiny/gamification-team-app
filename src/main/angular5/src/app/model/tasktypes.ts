import { Auditoria } from './auditoria';

export class TaskTypes {
  id: string;
  tipo: string;
  descripcion: string;
  points: Number;
  auditoria: Auditoria;
  _links: Links;
}

export class Links {
	taskTypes: Href;
}

export class Href {
	href: String;
}

export class EmbeddedTaskTypes {
	tasktypes: TaskTypes[];
}