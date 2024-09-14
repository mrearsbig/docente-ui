import { Pipe, PipeTransform } from '@angular/core';
import { EscalafonTecnico } from '../interfaces/escalafon-tecnico';

@Pipe({
  name: 'escalafonTecnico',
  standalone: true
})
export class EscalafonTecnicoPipe implements PipeTransform {

  transform(escalafonTecnico: EscalafonTecnico): string {
    switch (escalafonTecnico) {
      case EscalafonTecnico.Tecnico:
        return 'Técnico';
      case EscalafonTecnico.Tecnologo:
        return 'Tecnólogo';
      case EscalafonTecnico.Profesional:
        return 'Profesional';
    }
  }

}
