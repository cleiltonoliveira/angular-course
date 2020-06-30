import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoBr } from '../models/estado-br';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBr(): Observable<EstadoBr[]>{
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCargos(){
    return [
      {nome: 'Dev', nivel: 'Junior', desc: 'Dev Junior'},
      {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pleno'},
      {nome: 'Dev', nivel: 'Senior', desc: 'Dev Senior'}
    ];
  }

  getTecnologias(){
    return [
      {nome: 'java',desc: 'Java'},
      {nome: 'spring',desc: 'Spring Framework'},
      {nome: 'hibernate', desc: 'Hibernate'},
      {nome: 'angular', desc: 'Angular'},
    ];
  }

  getNewsletter() {
    return [{ valor: 's', desc: 'Sim' },
    { valor: 'n', desc: 'Não' }];
  }
}
