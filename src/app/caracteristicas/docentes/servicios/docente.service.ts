import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Docente } from '../interfaces/docente';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  leerDocentes(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.apiUrl);
  }

  leerDocente(id: number): Observable<Docente> {
    return this.http.get<Docente>(`${this.apiUrl}/${id}`);
  }

  crearDocente(docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(this.apiUrl, docente);
  }

  actualizarDocente(id: number, docente: Docente): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, docente);
  }

  borrarDocente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
