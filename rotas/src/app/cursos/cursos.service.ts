import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      { id: 1, nome: 'Angular 9' },
      { id: 2, nome: 'Spring Boot' }
    ];
  }

  getCurso(id: number) {
    let cursos = this.getCursos();

    for (let curso of cursos) {
      if(curso.id == id) return curso;
    }

    return null;
  }
}
