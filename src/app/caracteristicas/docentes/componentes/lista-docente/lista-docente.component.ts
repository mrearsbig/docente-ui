import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Docente } from '../../interfaces/docente';
import { DocenteService } from '../../servicios/docente.service';
import { EscalafonTecnicoPipe } from '../../pipes/escalafon-tecnico.pipe';

@Component({
  selector: 'app-lista-docente',
  standalone: true,
  imports: [RouterLink, EscalafonTecnicoPipe],
  templateUrl: './lista-docente.component.html',
  styleUrl: './lista-docente.component.css',
})
export class ListaDocenteComponent {
  docentes: Docente[] = [];

  constructor(private docenteServicio: DocenteService) {}

  ngOnInit() {
    this.docenteServicio
      .leerDocentes()
      .subscribe((response) => (this.docentes = response));
  }
}
