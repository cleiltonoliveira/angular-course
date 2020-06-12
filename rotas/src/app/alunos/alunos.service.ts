import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    { id: 1, nome: 'aluno01', email: 'aluno01@email.com' },
    { id: 2, nome: 'aluno02', email: 'aluno02@email.com' },
    { id: 3, nome: 'aluno03', email: 'aluno03@email.com' },
  ];

  constructor() { }

  getAlunos() { return this.alunos; };

  getAluno(id: number) {
    for (let aluno of this.getAlunos()) {
      if (aluno.id == id) return aluno;
    }
    return null;
  };
}
