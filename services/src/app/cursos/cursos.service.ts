import { Injectable, EventEmitter } from '@angular/core';
import { } from 'protractor';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Java', 'Angular', 'Spring'];

    constructor(private logService: LogService) {

    }

    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.consoleLog('Adicionando curso ' + curso);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}