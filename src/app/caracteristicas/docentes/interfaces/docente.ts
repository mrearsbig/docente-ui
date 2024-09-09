import { Extension } from "./extension";
import { Tecnico } from "./tecnico";
import { Tipo } from "./tipo";

export interface Docente {
    id: number;
    tipo: Tipo;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    contrato: string;
    ciudad: string;
    tecnico: Tecnico;
    extension: Extension;
}
