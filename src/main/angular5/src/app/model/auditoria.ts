import { Usuarios } from './usuarios';

export class Auditoria {
  id: string;
  usuario: Usuarios;
  fecha: string;
  _links: Links;
}

export class Links {
	auditoria: Href;
}

export class Href {
	href: String;
}

export class EmbeddedAuditoria {
	auditoria: Auditoria[];
}