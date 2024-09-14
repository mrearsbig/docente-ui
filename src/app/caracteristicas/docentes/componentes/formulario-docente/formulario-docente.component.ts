import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DocenteService } from '../../servicios/docente.service';
import { Docente } from '../../interfaces/docente';

@Component({
  selector: 'app-formulario-docente',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario-docente.component.html',
  styleUrl: './formulario-docente.component.css',
})
export class FormularioDocenteComponent {
  formularioDocente = new FormGroup({
    id: new FormControl(0, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    tipoIdentificacion: new FormControl(0, Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    contrato: new FormControl('', Validators.required),
    ciudad: new FormControl(''),
    escalafonTecnico: new FormControl(0, Validators.required),
    escalafonExtension: new FormControl(0, Validators.required),
  });

  constructor(
    private docenteServicio: DocenteService,
    private router: Router
  ) {}

  guardarDocente() {
    const docente: Docente = {
      id: this.formularioDocente.value.id ?? 0,
      tipoIdentificacion: Number(
        this.formularioDocente.value.tipoIdentificacion
      ),
      nombre: this.formularioDocente.value.nombre ?? '',
      apellido: this.formularioDocente.value.apellido ?? '',
      email: this.formularioDocente.value.email ?? '',
      telefono: this.formularioDocente.value.telefono ?? '',
      contrato: this.formularioDocente.value.contrato ?? '',
      ciudad: this.formularioDocente.value.ciudad ?? '',
      escalafonTecnico: Number(this.formularioDocente.value.escalafonTecnico),
      escalafonExtension: Number(
        this.formularioDocente.value.escalafonExtension
      ),
    };

    this.docenteServicio
      .crearDocente(docente)
      .subscribe(() => this.router.navigate(['/docentes']));
  }
}
