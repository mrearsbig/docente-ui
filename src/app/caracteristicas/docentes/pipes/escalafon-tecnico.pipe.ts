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
        return 'Tecnico';
      case EscalafonTecnico.Tecnologo:
        return 'Tecnologo';
      case EscalafonTecnico.Profesional:
        return 'Profesional';
    }
  }

}
