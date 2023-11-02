import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../entidades/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  url: string;


  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.urlAPI}empresas`;
  }

  public listar(): Observable<Empresa[]> {
    const urlT = `${this.url}/listar`;
    return this.http.get<Empresa[]>(urlT);
  }

  public agregar(empresa: Empresa): Observable<Empresa> {
    const urlT = `${this.url}/agregar`;
    return this.http.post<Empresa>(urlT, empresa);
  }
}
