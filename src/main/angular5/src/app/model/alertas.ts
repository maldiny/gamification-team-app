import { Auditoria } from './auditoria';
import { Usuarios } from './usuarios';

export class Alertas {
  id: string;
  usuario: Usuarios;
  mensaje: string;
  auditoria: Auditoria;
  _links: Links;
}

export class Links {
	alertas: Href;
}

export class Href {
	href: String;
}

export class EmbeddedAlertas {
	alertas: Alertas[];
}