import { EscalafonTecnico } from "./escalafon-tecnico";
import { EscalafonExtension } from "./escalafon-extension";
import { TipoIdentificacion } from "./tipo-identificacion";

export interface Docente {
    id: number;
    tipoIdentificacion: TipoIdentificacion;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    contrato: string;
    ciudad: string;
    escalafonTecnico: EscalafonTecnico;
    escalafonExtension: EscalafonExtension;
}
