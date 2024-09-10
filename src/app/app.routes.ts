import { Routes } from '@angular/router';
import { ListaDocenteComponent } from './caracteristicas/docentes/componentes/lista-docente/lista-docente.component';
import { FormularioDocenteComponent } from './caracteristicas/docentes/componentes/formulario-docente/formulario-docente.component';

export const routes: Routes = [
  {
    path: 'docentes',
    title: 'Docentes',
    component: ListaDocenteComponent,
  },
  {
    path: 'docentes/crear',
    title: 'Crear Docente',
    component: FormularioDocenteComponent,
  },
  {
    path: 'docentes/:id/actualizar',
    title: 'Actualizar Docente',
    component: FormularioDocenteComponent,
  },
  {
    path: '**',
    redirectTo: 'docentes',
  },
];
