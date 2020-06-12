import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormCanDeactivate } from './iform-deactivate';


@Injectable({ providedIn: 'root' })
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

    canDeactivate(
        component: IFormCanDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        return component.podeDesativar();
    }
}